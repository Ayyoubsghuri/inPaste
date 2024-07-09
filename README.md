# inPaste - Pastebin Clone
![alt text](https://github.com/AyoubSghuri/inPaste/blob/main/inpaste_front/src/images/logo.png?raw=true)

## Overview
inPaste is a clone of the popular Pastebin website, designed to allow users to quickly and easily share text online. This project was created as a lightweight version of Pastebin, focusing on anonymous paste sharing without the need for login or saving user data.

## Screenshot
![alt text](https://github.com/AyoubSghuri/inPaste/blob/main/inpaste_front/Home%20Page.png?raw=true)

## Key Features
- **Add Pastes**: Users can add text to share online by creating a new paste.
- **Public or Private Sharing**: Pastes can be shared publicly or privately by setting a password.
- **Delete Pastes**: Users can delete their pastes by providing the corresponding password.
- **Paste Expiration**: Pastes can be set to expire after a certain period.

## Figma Design
[Design on Figma](https://www.figma.com/design/fXUtGtLr9GPtvOf9EuJtbM/Untitled?node-id=0-1&t=FAz7CXGjnKuTzHlj-1)

## Background Task Management
One of the challenges encountered during the development of inPaste was implementing background tasks to regularly check if pastes had exceeded their expiration time. Django offers several options, including using libraries such as Celery or Django Background Tasks. These tools allow for the scheduling and execution of asynchronous tasks, such as checking for expired pastes, in an efficient and reliable manner.

## Design
The visual design of inPaste aimed to create an attractive and user-friendly interface. Using the Tailwind CSS library, I was able to create responsive components and layouts while maintaining a user-centered approach. Although the project may require further improvements in this area, I aimed to provide a pleasant and intuitive user experience.

## Technologies Used
- **Django**: A powerful web framework for rapid development of web applications in Python.
- **Django Rest Framework (DRF)**: An extension of Django for building Web APIs.
- **Tailwind CSS**: A utility-first CSS framework for creating modern and customizable designs.
- - **Reactjs**: frontend framework that use Javascript for rapid web development. 

## Acknowledgements
**Note:** Although inPaste was initially conceived as a test project, it was created with care and attention to provide a quality experience. I am open to feedback, suggestions, and contributions to further improve this project.
