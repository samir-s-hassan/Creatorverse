# WEB103 Prework - Creatorverse

Submitted by: Samir Hassan

About this web app: Creatorverse is a web app for managing and showcasing content creators. Users can view detailed profiles, update information, add new creators, and remove existing ones. The platform features a responsive design, ensuring a seamless experience across devices. Creatorverse provides an intuitive interface for both managing creator data and exploring content.

Time spent: 4 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [X] Implemented a "Back to home" feature on both the Edit Creator page and the View Creator page
* [X] Let the user know when a Creator did not have an image available to maintain consistency throughout the different Creator cards
* [X] On the Edit Creator page, the user is shown the image of the creator

## How to run

1. Run "npm run dev" to launch the app on a localhost within your browser
2. Use the app!

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿 [Watch Video Walkthrough](https://drive.google.com/file/d/1rv40Jxwf9ll7jH9bkKWAel_mOP-YU8Zc/view?usp=sharing)

<!-- Replace this with whatever GIF tool you used! -->
Video created with macOS built-in video recording software
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

There were a few challenges I encountered. I was having trouble passing in the creator data using useEffect in the App.js file. I know I could've done the fetch calls in the respective Edit, View, Show creator files but this would mean I'd have to code it in each time. To maintain modularity, I coded in the useEffect function in the App.js, then used a function called refreshCreators that would be passed into my Add and Edit Creator files. Therefore, upon change, the refreshCreator would make a call to the fetchCreators and when we would go back to the Show Creators page, we would see this update of data.

I also found it difficult to find the best styling for all the cards. Therefore, I stuck with a dynamic card design in which the cards weren't of consistent sizing. Rather, the cards would update based on the size of the data present inside of them. 

I enjoyed using React Router instead of useNavigate(). It is very simple and intuitive to navigate to different web pages using this function.

Lastly, Supabase is a pretty cool UI for making a quick database and connecting it to my React app. I will further explore this in the future.

## License

Copyright 2024 Samir Hassan

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
