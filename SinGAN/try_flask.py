from flask import Flask, render_template, request, current_app, send_from_directory, session
import subprocess
from flask_cors import CORS
import signal
import sys
import platform
import os
import glob
import random

app = Flask(__name__, static_folder='dist')
CORS(app)
final_process = None
mode_name = ''
source_name = ''
ref_name = ''
scale_num = 0


def desktop_path():
    os_name = platform.system()
#    print(os_name)
    if os_name == 'Windows':
        desktop = os.path.join(os.path.join(
            os.environ['USERPROFILE']), 'Desktop')
#        print(desktop)
    elif os_name == 'Linux':
        desktop = os.path.join(os.path.join(
            os.path.expanduser('~')), 'Desktop')
#        print(desktop)
    elif os_name == 'Darwin':
        desktop = os.path.join(os.path.expanduser("~"), "Desktop")
#        print(desktop)
    d_path = os.path.join(str(desktop), "workspace")
#    print(d_path)
    return d_path


def os_cmd():
    os_name = platform.system()
    mv_cmd = ""
    cp_cmd = ""
    slash = ""
    if os_name == 'Windows':
        mv_cmd = "move"
        cp_cmd = "copy"
        slash = "\\"
    else:
        mv_cmd = "mv"
        cp_cmd = "cp"
        slash = "/"
    return mv_cmd, cp_cmd, slash


@app.route('/')
def main():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/initial', methods=['GET'])
def initial():
    with open("log.txt", "r+") as myfile:
        percentage = myfile.readlines()
        percentage = str(percentage[0])
        if percentage == "100%":
            myfile.truncate(0)
            myfile.seek(0)
            myfile.write("-1%")
    with open("out.txt", "r+") as mf:
        status = mf.readlines()
        if status == "done":
            mf.truncate(0)
            mf.seek(0)
            mf.write("ready")
    return ('200')


@app.route('/stop', methods=['GET'])
def stop():
    global final_process
    if final_process != None:
        #        final_process.kill()
        #        final_process.terminate()
        #        os.kill(final_process.pid, signal.SIGTERM)
        if platform.system() != 'Windows':
            os.killpg(os.getpgid(final_process.pid), signal.SIGTERM)
        else:
            final_process.send_signal(signal.CTRL_BREAK_EVENT)
            final_process.kill()
        with open("log.txt", "w") as f:
            f.write("0%")
        with open("out.txt", "w") as f:
            f.write("done")
    return ('200')


@app.route('/progress', methods=['GET'])
def progress():

    with open("log.txt", "r") as myfile:
        percentage = myfile.readlines()
    percentage = str(percentage[0])
    obj = {'progresss'}
    return (percentage)


@app.route('/status', methods=['GET'])
def done():
    with open("out.txt", "r") as myfile:
        status = myfile.readlines()
    status = str(status[0])
    obj = {'done'}
    return (status)

# @app.route('/output', methods=['GET'])
# def done():
#    with open ("out.txt", "r") as myfile:
#        status=myfile.readlines()
#    status = str(status[0])
#    if status == 'done':
#        print("mode_name = ",mode_name)
#        print("source_name = ",source_name)
#        print("ref_name = ",ref_name)
#        print("scale_num = ",scale_num)
#        out_path = abs_path+"/"+mode_name+"/"+source_name+"/"+ref_name+"_out/start_scale="+str(scale_num)+".png"
#        print(out_path)
#        file_path_type = ["./Memes/*.png", "./Memes/*.jpeg"]
#    obj = {'done'}
#    return (out_path)


# harmonization
@app.route('/Harmonization', methods=['POST'])
def harmonization():

    global mode_name, source_name, ref_name, scale_num
    mode_name = 'Harmonization'
    print("request = ", request.get_json())
    print("source_name = ", request.get_json()['image1'])
    print("ref_name = ", request.get_json()['image2'])
    print("scale_num = ", request.get_json()['scale'])
    source_name = request.get_json()['image1'].split(".")[0]
    ref_name = request.get_json()['image2'].split(".")[0]
    scale_num = request.get_json()['scale']

    abs_path = desktop_path()
    split_ref = request.get_json()['image2'].split(".")
    rename_mask = split_ref[0]+"_mask."+split_ref[1]
    mv, cp, slash = os_cmd()

    pre_mv = mv+" "+abs_path+slash + \
        request.get_json()['image3']+" "+abs_path+slash+rename_mask
    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"
    pre_cp_mask = cp+" "+abs_path+slash+rename_mask+" Input"+slash+"Harmonization"
    pre_cp_ref = cp+" "+abs_path+slash + \
        request.get_json()['image2']+" Input"+slash+"Harmonization"

    train = "python main_train.py --input_name "+request.get_json()['image1']
    cmd = "python harmonization.py --input_name "+request.get_json()['image1']+" --ref_name "+request.get_json()[
        'image2']+" --harmonization_start_scale "+str(request.get_json()['scale'])
    #+" --input_dir "+request.get_json()['path']+" --ref_dir "+request.get_json()['path']

    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
    subprocess.Popen(pre_mv, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_ref, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_mask, shell=True, stdout=None, stderr=None)
#    train_process = subprocess.Popen(train, shell=True, stdout=None, stderr=None)
#    train_process.wait()
#    inference_process = subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
#    inference_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)

    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)
    return ('200')

# editing


@app.route('/Editing', methods=['POST'])
def editing():
    abs_path = desktop_path()
    split_ref = request.get_json()['image2'].split(".")
    rename_mask = split_ref[0]+"_mask."+split_ref[1]
    mv, cp, slash = os_cmd()

    pre_mv = mv+" "+abs_path+slash + \
        request.get_json()['image3']+" "+abs_path+slash+rename_mask
    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"
    pre_cp_mask = cp+" "+abs_path+slash+rename_mask+" Input"+slash+"Editing"
    pre_cp_ref = cp+" "+abs_path+slash + \
        request.get_json()['image2']+" Input"+slash+"Editing"

    train = "python main_train.py --input_name "+request.get_json()['image1']
    cmd = "python editing.py --input_name "+request.get_json()['image1']+" --ref_name "+request.get_json()[
        'image2']+" --editing_start_scale "+str(request.get_json()['scale'])
    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
    subprocess.Popen(pre_mv, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_ref, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_mask, shell=True, stdout=None, stderr=None)
#    train_process = subprocess.Popen(train, shell=True, stdout=None, stderr=None)
#    train_process.wait()
#    inference_process = subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
#    inference_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)

    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)

    return ('200')

# paint2image


@app.route('/Paint2Image', methods=['POST'])
def paint2image():
    abs_path = desktop_path()
    mv, cp, slash = os_cmd()
    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"
    pre_cp_ref = cp+" "+abs_path+slash + \
        request.get_json()['image2']+" Input"+slash+"Paint"

    train = "python main_train.py --input_name "+request.get_json()['image1']
    cmd = "python paint2image.py --input_name "+request.get_json()['image1']+" --ref_name "+request.get_json()[
        'image2']+" --paint_start_scale "+str(request.get_json()['scale'])
    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    subprocess.Popen(pre_cp_ref, shell=True, stdout=None, stderr=None)
#    train_process = subprocess.Popen(train, shell=True, stdout=None, stderr=None)
#    train_process.wait()
#    inference_process = subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
#    inference_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)

    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)

    return ('200')

# SuperResolution


@app.route('/SuperResolution', methods=['POST'])
def SR():
    abs_path = desktop_path()
    mv, cp, slash = os_cmd()

    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"
    cmd = "python SR.py --input_name " + \
        request.get_json()['image1']+" --sr_factor " + \
        str(request.get_json()['resolution'])
    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    sr_process = subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
#    sr_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)

    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)

    return ('200')

# animation


@app.route('/Animation', methods=['POST'])
def animation():
    abs_path = desktop_path()
    mv, cp, slash = os_cmd()

    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"
    cmd = "python animation.py --input_name "+request.get_json()['image1']
    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    ani_process = subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
#    ani_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)
    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {} && {} && {}".format(
            pre_cp_train, pre_cp_ref, pre_cp_mask, train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)

    return ('200')

# Randomsample


@app.route('/RandomSample', methods=['POST'])
def RS():
    abs_path = desktop_path()
    mv, cp, slash = os_cmd()
    pre_cp_train = cp+" "+abs_path+slash + \
        request.get_json()['image1']+" Input"+slash+"Images"

    train = "python main_train.py --input_name "+request.get_json()['image1']
    cmd = "python random_samples.py --input_name " + request.get_json()['image1']+" --mode random_samples_arbitrary_sizes --scale_h "+str(request.get_json()['height'])+" --scale_v "+str(request.get_json()['width'])
    post_cp_out = cp+" -R"+" Output"+slash+" "+abs_path + \
        slash if slash == '/' else "xcopy Output "+abs_path+slash+"Output /S/I/Y/Q"
#    subprocess.Popen(pre_cp_train, shell=True, stdout=None, stderr=None)
#    train_process = subprocess.Popen(
#        train, shell=True, stdout=None, stderr=None)
#    train_process.wait()
#    inference_process = subprocess.Popen(
#        cmd, shell=True, stdout=None, stderr=None)
#    inference_process.wait()
#    subprocess.Popen(post_cp_out, shell=True, stdout=None, stderr=None)
    global final_process
    if slash == '/':
        final_process = subprocess.Popen("{} && {} && {} && {}".format(pre_cp_train,train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, preexec_fn=os.setsid)
    else:
        final_process = subprocess.Popen("{} && {} && {} && {}".format(pre_cp_train,train, cmd, post_cp_out), shell=True, stdout=None, stderr=None, creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)    
    
    return ('200')


def handler(signal, frame):
    with open("log.txt", "w") as f:
        f.write("0%")
    with open("out.txt", "w") as f:
        f.write("done")
    print('CTRL-C pressed!')
    sys.exit(0)


signal.signal(signal.SIGINT, handler)


if __name__ == '__main__':
    app.run(host = '127.0.0.1',port = '5000')
