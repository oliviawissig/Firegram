# Firegram
[firegram.oliviawissig.com](https://firegram.oliviawissig.com/)

### Overview
A project that utilizes Firebase to allow users to upload images to the page. Users are required to log in prior to uploading images, in order to avoid uploading unwanted pictures. Whenever a new image is uploaded, the user email and user ID is logged with the entry. 

I really enjoyed the journey of adding Firebase Authentication for this project. I wanted to open up the Firebase Database permissions to allow users to upload images, but I was hesitant to allow all users (event guests) to upload photos. I learned that I could put a check in place that requires the user to be verified prior to allowing uploads, but I needed to implement [Firebase Authentication](https://firebase.google.com/docs/auth) first. 

After implementing an inital registration & log in flow, I was able to update the database permissions and perform a check in the code that happens before writing the new image to the database. The next features I plan on implementing are improving the UI for the registration & sign up forms, and adding a responsive navigation bar. 

I learned/improved on:
- Lazy loading images in React
- Using APIs to upload and display images
- Implementing Firebase & Firebase Authentication 

<!-- TODO: Add a screenshot of the live project.
    1. Link to a 'live demo.'
    2. Describe your overall experience in a couple of sentences.
    3. List a few specific technical things that you learned or improved on.
    4. Share any other tips or guidance for others attempting this or something similar.
 -->

<span align="center">
  <img src="https://i.imgur.com/Yb7M0ir.png" alt="" width="625"/>
</span>

### Built With
React, CSS, JavaScript, Firebase, Firebase Authentication
<!-- TODO: List any MAJOR libraries/frameworks (e.g. React, Tailwind) with links to their homepages. -->

### Features
- Built from scratch with `create-react-app`
- Uses React hooks and `useEffect()`
- Supports multiple environments with a fully responsive design. Proper formatting should be exepcted with mobile, desktop, and tablet devices.
- Supports ability for users to register and log in.
- Users must be logged in and verified via email before uploading images.

<!-- TODO: List what specific 'user problems' that this application solves. -->

<!-- ## Contact -->

<!-- TODO: Include icons and links to your RELEVANT, PROFESSIONAL 'DEV-ORIENTED' social media. LinkedIn and dev.to are minimum. -->

<!-- ## Acknowledgements -->

<!-- TODO: List any blog posts, tutorials or plugins that you may have used to complete the project. Only list those that had a significant impact. Obviously, we all 'Google' stuff while working on our things, but maybe something in particular stood out as a 'major contributor' to your skill set for this project. -->
