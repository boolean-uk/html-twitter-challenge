# Twitter Clone

For this exercise, we will be building a clone of Twitter:

![twitter](images/twitter.png)

This will put into practice everything we have learned so far about HTML & CSS. The below image shows level of detail you should replicate from Twitter:

![twitter clone](images/example.png)

## Setup
1. Fork this repository to your account.
2. Clone the forked repository to your local machine
3. Open a Pull Request back to the upstream repo

## Instructions
- Use the HTML elements you've learned about so far to define the page content
- Use an external CSS stylesheet to style the page
- Use CSS Grid for the layout and components
- You should start *without* images and then add them later at the end of the exercise once the basic criteria has been met

### Tips
- Breakdown the page into sections
- Pay attention to alignment and spacing
- Work section by section until it looks good

## Assesment Criteria
* &#9745; Layout the main page elements (left-hand menu, tweet feed and right side-bar) using CSS Grid. CSS Grid should also be used to layout individual tweets.
* &#9745; Define the page contents using HTML with appropriate elements. HTML should be well formatted.
* &#9745; Style the page using a mixture of Type, ID and Class CSS selector types
* &#9745; Implement hover and selected state for the left-hand menu links.

### Extension Criteria
* &#9745; Make the layout responsive so that the side-bars are removed on lower resolution devices
* &#9745; Include images using the `img` and `svg` tags.
    * Get the source for the icon images from the Twitter website as SVG and include them with `svg` tags
    * Use a local file for the profile image. Research how to use CSS to to make the profile image appear as a circle


<div class="gridlayout">
    <div class="gridlayout__left-sidebar">
        <div class="logo">
        </div>
<div class="sidebar-menu">
  <div class="sidebar-menu__item sidebar-menu__item--active">
    <img src="/img/svg/home.svg" class="sidebar-menu__item-icon" />
    Home
  </div>
  <div class="sidebar-menu__item">
    <img src="/img/svg/explore.svg" class="sidebar-menu__item-icon" />
    Explore
  </div>

  <div class="sidebar-menu__item">
    <img src="/img/svg/notifications.svg" class="sidebar-menu__item-icon" />
    Notifications
  </div>

  <div class="sidebar-menu__item">
    <img src="img/svg/messages.svg" class="sidebar-menu__item-icon" />
    Messages
  </div>

  <div class="sidebar-menu__item">
    <img src="img/svg/bookmark.svg" class="sidebar-menu__item-icon" />
    Bookmarks
  </div>

  <div class="sidebar-menu__item">
    <img src="img/svg/list.svg" class="sidebar-menu__item-icon" />
    Lists
  </div>

  <div class="sidebar-menu__item">
    <img src="img/svg/profile.svg" class="sidebar-menu__item-icon" />
    Profile
  </div>

  <div class="sidebar-menu__item">
    <img src="img/svg/more.svg" class="sidebar-menu__item-icon" />
    More
  </div>
</div>

<div class="tweet-button">
  <a href="https://twitter.com/" class="social-link Twitter">Tweet</a>
</div>
