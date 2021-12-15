import React from "react";
import Modal from "./Modal";

const Help = (props) => {
  const closeHandler = () => {
    props.close();
  };
  return (
    <Modal title={"Getting Started"} onConfirm={closeHandler}>
      <h2>Welcome to Malik's Food Logger Web App</h2>
      <p>
        This food logger app that allows users to input and save a food item
        along with its macronutrient information to track food over their day.
        This project was made using React, HTML, and CSS. For more information
        check out the readMe doc on{" "}
        <a href="https://github.com/malikrawashdeh/MacroTracker">github</a>
      </p>
      <h2>How to use:</h2>
      <h3>Adding a food Item</h3>
      <p>
        Click "Add New Food" to begin entering food data. Enter in the food
        data. If the food data is not entered correctly or not complete then an
        error message will show.
      </p>
      <h3>Viewing Added Food Item</h3>
      <p>
        Scroll down to the list of food items and click on the name of the food
        item you entered. You should see a drop down that displays the specific
        macro nutrients you entered
      </p>
      <h3>Deleting Items</h3>
      <p>
        To delete an item, press the delete button when the food item card is
        exanded
      </p>
    </Modal>
  );
};

export default Help;
