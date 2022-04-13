# Into_Film--Pix2Pix-and-SinGAN

Using pix2pix and SinGAN to get into the movie

## Pix2Pix

 * This project is inspired by [the paper](https://arxiv.org/abs/1611.07004), which aims to investigate how to build and train a conditional generative adversarial network (cGAN) called pix2pix, which learns image translation training from input images to output images.

 * pix2pix can be used for a wide range of tasks, including compositing photos from tagged maps, generating color photos from black and white images, converting Google Maps photos to satellite aerial images, or converting sketches to photos.

  ![image](https://user-images.githubusercontent.com/69034494/163197685-38160454-dd39-4fd5-abc5-7da9f85255e2.png)


## SinGAN

 * The second part of this research uses SinGAN for image fusion. The authors of this paper are from Technion and Google.

 * In general, training GANs to generate images requires at least thousands of training data to have good results. SinGAN can train a generative model with only a single natural image.

  ![image](https://user-images.githubusercontent.com/69034494/163198062-c7fc22c6-34ee-4e69-8b20-378ae6cb03d0.png)

## Purpose

  Situational application :
  
  * Get into the movies of the past
    > Recreate black and white classic movie footage into color training with Pix2Pix.
    
  * Get into the movies of the future
    > Incorporating my pre-taken photos into the movie training with SinGAN.

## Training Process

  Step 1: Pix2Pix training process
  
   1. Model Training
    
      > For the model trained by Pix2Pix, the image is mainly brown at the beginning. That is, the mixture of the three primary colors (red, yellow, and blue) in the painting becomes brown.

      > After 45 epochs, it can be seen that the image does not change much. During the training and learning process, some pictures are obviously blurred.
    <h1>
      <img src="https://user-images.githubusercontent.com/69034494/163203221-be095c18-d9ba-4750-bc6e-cb60d471c92c.png" width="350" height="400"/>
   </h1>

   2. Model Testing
      ![image](https://user-images.githubusercontent.com/69034494/163203515-3dcb79db-a799-449f-b30c-f0e4c118a32d.png)
      
  Step 2: SinGAN training process

   1. Model Training
   
      > For the model trained by SinGAN, you need to put a picture of Training, Input and Mask before use.

      > To generate from any starting random samples first run RandomSamples :
  
      <pre><code> python random_samples.py --input_name <training_image> --mode random_samples --gen_start_scale <start scale>
      </code></pre>
      
      > It will output several RandomSamples images, then run Harmonization and fill in the scale value
      <pre><code>     python harmonization.py --input_name <training_image> --ref_name <pasted_reference_image> --harmonization_start_scale <scale>
      </code></pre>
    <h1>
      <img src="https://user-images.githubusercontent.com/69034494/163206395-6a8456c9-de51-4f8b-8630-9537d701ddc4.png" width="350" height="400"/>
    </h1>

   2. Output
     <h1>
        <img src="https://user-images.githubusercontent.com/69034494/163206632-4d697ed9-4c1b-4536-8607-8621dd63c50e.png" width="800" height="400"/>
        <img src="https://user-images.githubusercontent.com/69034494/163206701-d81022d4-b4c2-4f93-8889-efb75e5170db.png" width="800" height="300"/>
    </h1>

## Conclusion

At present, the experimental result is to make an image, and there are also attempts to make the training process into a gif file. In the future, it may be possible to capture every frame of the movie clip to form an animation file.

I think that in the development and imagination of AI, adding real portraits to movies through AI model training can generate more imagination and interesting reactions for discussion.

## Reference

[Pix2Pix: Image-to-image translation with a conditional GAN](https://www.tensorflow.org/tutorials/generative/pix2pix)--Phillip Isola, Jun-Yan Zhu, Tinghui Zhou, Alexei A. Efros

[SinGAN: Learning a Generative Model from a Single Natural Image](https://openaccess.thecvf.com/content_ICCV_2019/papers/Shaham_SinGAN_Learning_a_Generative_Model_From_a_Single_Natural_Image_ICCV_2019_paper.pdf)--Tamar Rott Shaham, Tali Dekel, Tomer Michaeli 
