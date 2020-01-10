# Project 2: Platterist

## Project Description

A music information search app that allows user to search for a song name receiving artist, album and lyrics for the song using a music information API. 

## Project Links

- [API] (https://developer.musixmatch.com/documentation/api-reference/track-search)
- [Repo] (https://github.com/kirsten4ester/Platterist.git)
- [Platterist] (https://platterist.netlify.com/)

## Wireframes

- [WireFrame1](https://i.imgur.com/9B9LvCJ.jpg)
- [WireFrame2](https://i.imgur.com/RvUZz9c.jpg)

### MVP/PostMVP 

### MVP:
A working (mobile) app that has a search/input box. Once searched, the app will deliver the pieces of information (i.e., artist, album title, lyrics)

### Alternate ideas/ Post-MVP:
- music/ trivia game of rolling songs/titles. then having to guess artist (input)

- Spotify/ AppleMusic link to bring directly to song 
- implementing video background of spinning vinyl
- add to favorites feature -- then requiring login/account

## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Making Components | H | 3hrs| - | - |
| Making Form | H | 3hrs| - | - |
| Styling | H | 3hrs| - | - |
| Working with API | H | 5hrs| - | - |
| Total | H | 15 hrs | - | - |

## Additional Libraries
 - Bootstrap
 - Axios 

## Code Snippet

    <style>
      @media only screen and (min-width: 415px) {
        body {
          background-image: url(https://i.imgur.com/jetKUvo.jpg);
          background-repeat: no-repeat;
          background-position: center top;
          background-attachment: fixed;
          background-size: cover;
          }
    }
    </style>

	One goal of mine with this app was making it responsive. With working with multiple libraries, I faced the need to configure for reaching my desired design alongside react, bootstrap, and css. With greatly enjoying the styling side of building, it was great to find a way to alter the background image with a media query through html. 


## Issues and Resolutions
 **ERROR**: error code 429 for API call 
 **RESOLUTION**: discovered simply a matter of loading

errors with: 
- deploying using netlify -- **fixed**
- successfully pulling time from API converting to appropriate format using Moment -- **not resolved**