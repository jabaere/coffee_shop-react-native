# coffee_shop-react-native
   ## 1. Even though I don't use the back-end, this is not just a front-end app. The app has some functionality, such as: 
      ### - Adding and removing products from the cart.
      ### - Choose product via parameters, such as:
            ### - Quantity
            ### - Shot
            ### - size
            ### - with/without ice
      ### - Updating, editing, or removing profile information.
      ### - When the user logs in, the system creates a profile object with the user's email address and some default parameters, including a randomly generated Name.
   ## 2. Here is the basic structure of the project.
<pre>
App.js
android
app.json
assets
   |-- adaptive-icon.png
   |-- appstore.png
   |-- coffeeIcon.png
   |-- favicon.png
   |-- home.jpg
   |-- img
   |   |-- americano.png
   |   |-- capuchino.png
   |   |-- flat.png
   |   |-- fpx.png
   |   |-- mastercard.png
   |   |-- mocha.png
   |   |-- user.jpg
   |   |-- visa.png
   |-- playstore.png
   |-- splash.png
   |-- svg
   |   |-- ArrowRight.svg
   |   |-- Glass.svg
   |   |-- GlassFill.svg
   |   |-- LockIcon.svg
   |   |-- MessageIcon.svg
   |   |-- Orders.svg
   |   |-- Profile.svg
   |   |-- ProfileIcon.svg
   |   |-- Reward.svg
   |   |-- ShowIcon.svg
   |   |-- SmartPhoneIcon.svg
babel.config.js
components
   |-- AnimatedDots.jsx
   |-- BlueButton.jsx
   |-- CheckoutCard.jsx
   |-- CoffeeCard.jsx
   |-- CountDown.jsx
   |-- Keypad.jsx
   |-- LoyaltyCard.jsx
   |-- RadioButton.jsx
   |-- RedeemCard.jsx
   |-- RenderORderItem.jsx
   |-- SubmitButton.jsx
   |-- modals
   |   |-- ConfirmationModal.jsx
   |-- svg
   |   |-- BackArrowSVG.js
   |   |-- BagSVG.js
   |   |-- BigCup.js
   |   |-- CallSVG.js
   |   |-- CoffeSvg.js
   |   |-- CoffeeMachineSVG.js
   |   |-- ColdCoffeeCup.js
   |   |-- Delete.js
   |   |-- DeliverySVG.js
   |   |-- EditSVG.js
   |   |-- EmailSVG.js
   |   |-- GiftSVG.js
   |   |-- HotCoffeeCup.js
   |   |-- ListSVG.js
   |   |-- LocationSVG.js
   |   |-- MediumCup.js
   |   |-- MessageSVG.js
   |   |-- PaperPlaneSVG.js
   |   |-- ShopSVG.js
   |   |-- ShopingCart.js
   |   |-- SmallCapSVG.js
   |   |-- SmallCup.js
   |   |-- User.js
   |   |-- Wallet.js
index.js
metro.config.js
package-lock.json
package.json
screens
   |-- CallScreen.jsx
   |-- Cart.jsx
   |-- Details.jsx
   |-- Forgotpassword.jsx
   |-- GreetingScreen.jsx
   |-- GreetingScreen_two.jsx
   |-- HomePage.jsx
   |-- Login.jsx
   |-- MessageScreen.jsx
   |-- OrderSuccess.jsx
   |-- Orders.jsx
   |-- Profile.jsx
   |-- RedeemScreen.jsx
   |-- Rewards.jsx
   |-- SignUp.jsx
   |-- TrackOrder.jsx
   |-- Verification.jsx
   |-- bottom_navigation
   |   |-- BottomTab.jsx
store
   |-- cartSlice.js
   |-- chatSlice.js
   |-- orderSlice.js
   |-- profileSlice.js
   |-- redeemSlice.js
   |-- store.js
utils
   |-- globalFuntions.js
</pre>
