from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)


@app.route('/')
def main():
     return render_template('multi_submit.html')
    
@app.route('/progress', methods=['GET'])
def progress():
    with open ("log.txt", "r") as myfile:
        percentage=myfile.readlines()
    percentage = str(percentage[0])
    return render_template('multi_submit.html', percent = percentage)


@app.route('/function', methods=['POST', 'GET'])
def function():
    if request.method == 'POST':
        
        if request.values['function'] == 'Harmonization':
            
            train = "python main_train.py --input_name "+request.values['image1']
            cmd = "python harmonization.py --input_name "+request.values['image1']+" --ref_name "+request.values['image2']+" --harmonization_start_scale "+request.values['scale']
            subprocess.Popen(train, shell=True, stdout=None, stderr=None)
            subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
            return render_template('multi_submit.html')
        
        if request.values['function'] == 'Editing':
            
            train = "python main_train.py --input_name "+request.values['image1']
            cmd = "python editing.py --input_name "+request.values['image1']+" --ref_name "+request.values['image2']+" --editing_start_scale "+request.values['scale']
            subprocess.Popen(train, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            return render_template('multi_submit.html',slogan = train,slogan2 = cmd)
        
        if request.values['function'] == 'Paint2Image':
            
            train = "python main_train.py --input_name "+request.values['image1']
            cmd = "python paint2image.py --input_name "+request.values['image1']+" --ref_name "+request.values['image2']+" --paint_start_scale "+request.values['scale']
            subprocess.Popen(train, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            return render_template('multi_submit.html',slogan = train,slogan2 = cmd)
        
        if request.values['function'] == 'SuperResolution':
            
            cmd = "python SR.py --input_name "+request.values['image1']
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            return render_template('multi_submit.html',slogan = cmd)
        
        if request.values['function'] == 'Animation':
            
            cmd = "python animation.py --input_name "+request.values['image1']
            subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
            return render_template('multi_submit.html',slogan = cmd)
        
        if request.values['function'] == 'Train':
            
            cmd = "python main_train.py --input_name "+request.values['image1']
            subprocess.Popen(cmd, shell=True, stdout=None, stderr=None)
            return render_template('multi_submit.html',slogan = cmd)
    

if __name__ == '__main__':
     app.run(host = '140.116.72.102',port = '5278')