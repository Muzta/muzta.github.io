---
title: "Image recognition"
description: "Web application that identifies the game an image belongs to using CNNs. Final Degree Project for the university"
image:
  url: "../../assets/cnns.svg"
  alt: "CNNs logo"
workImages:
  - url: "../../assets/gameRecognition-predict.gif"
    alt: "Game recognition prediction GIF"
platform: "Web"
stack: "Python, Keras, TensorFlow, OpenCV, Flask, Docker"
contribution: "Web Scraping code for YouTube video images extraction, Flask website"
github: "https://github.com/Muzta/gameRecognition"
date: "2022"
---

The theoretical objective of this Final Degree Project was to go into Artificial Intelligence. To accomplish this, an application for image recognition was chosen, enabling users to determine the game a screenshot belongs to. ResNet was selected as the neural network for this purpose, while training images were obtained through web scraping of YouTube videos.  
Python was utilized for both objectives, specifically employing OpenCV, Pillow, and YoutubeDL for image extraction and processing for the dataset, Keras and TensorFlow for CNN implementation, and Flask for web development. Finally, the application was isolated within a Docker container.  
The final outcome: a web application that, after uploading a screenshot, predicts the corresponding game (regardless of the gameplay section) and provides a confidence percentage.
