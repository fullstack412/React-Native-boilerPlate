import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

class HTMLCSSjQuery extends Component {

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    const topic = 'HTML CSS and jQuery';
    const introduction = 'HTML provides the basic structure of sites, which is enhanced and modified by other technologies like CSS and JavaScript. CSS is used to control presentation, formatting, and layout. jQuery is a JavaScript library that simplifies the interaction between HTML, CSS, and JavaScript';
    const body = [
      [
        'What is HTML?', 
        'HTML is the standard markup language for creating Web pages.\n\
HTML stands for Hyper Text Markup Language.\n\
HTML describes the structure of Web pages using markup.\n\
HTML elements are the building blocks of HTML pages.\n\
HTML elements are represented by tags.\n\
HTML tags label pieces of content such as "heading", "paragraph", "table", and so on Browsers do not display the HTML tags, but use them to render the content of the page.'
      ],[
        'Lets analyze this website',
        'Add Image'
      ],[
        'HTML Elements',
        'As we have seen in the previous photo there is a lot of elements in that HTML page.\n\
These elements can be add to a website using something called tags. So what is an HTML tag ?\n\
Add Image\n\
A tag has a “start tag”, “end tag”, some content and optional attributes.\n\
HTML elements can have attributes such as: class, id. For example:\n\
<p id="paragraph">I\'\m a paragraph</p>'
      ],[
        'The anatomy of an HTML document',
        'Add Image'
      ],[
        'HTML elements enable us to',
        'Add content.\n\
Add Images.\n\
Add links.\n\
Add heading.\n\
Add Forms.\n\
Add tables.\n\
HTML is the skeleton of any web page. It is the skeleton of the internet.'
      ],[
        'Some of HTML elements',
        '<!DOCTYPE html> declaration defines this document to be HTML5.\n\
<html> element is the root element of an HTML page.\n\
<head> element contains meta information about the page.\n\
<title> element specifies a title for the page.\n\
<body> element contains the visible page content.\n\
<h1> element defines a large heading.\n\
<p> element defines a paragraph.\n\
<button> element defines a button.'
      ],
      
      
      [
        'What is CSS?',
        'CSS stands for (Cascading Style Sheets), Used to describe the presentation of HTML document. Like HTML, CSS is not really a programming language.\n\
        It\'\s designed primarily to enable the separation of presentation and content. We can easily control HTML elements by using css selector to apply styles selectively to elements in HTML documents.'
      ],[
        'The anatomy of CSS selector',
        'Add Image'
      ],[
        'Selectors in CSS',
        'Add Image'
      ],[
        'Where you can write CSS?',
        'Add Image'
      ],
      
      
      
      [
        'jQuery',
        'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, etc. much simpler. It allow you to do a ton of things without writing a ton of code.'
      ],[
        'The anatomy of a jQuery selector',
        'Add Image'
      ],[
        'Comparison: jQuery and Javascript',
        'No jQuery:\n\
document.querySelector("img#profile").style.display = "none"\n\
With jQuery:\n\
$("img#profile").hide()\n\
No jQuery:\n\
var box = document.createElement("div");\n\
document.querySelector("div").className = "special";\n\
document.querySelector("div").textContent = "Hello World!";\n\
box.style.cssFloat = "right";\n\
box.style.backgroundColor = "red";\n\
box.style.color = "blue";\n\
document.querySelector("body").appendChild(box);\n\
With jQuery:\n\
var box = $("<div>Hello World!</div>");\n\
box.addClass("special");\n\
box.css({"float": "right", "background-color": "red", "color": "blue"});\n\
$("body").append(box);'
      ],[
        'Examples of selecting elements in CSS',
        '<p>Hello World!</p> $("p")\n\
<img src="corgi.jpg"> $("img")\n\
<p class="intro">Hello World!</p> $("p.intro")\n\
<div id="greeting"><p class="intro">Hello World!</p></div> $("#greeting .intro")'
      ],[
        'Adding a class to an element using jQuery -- breaking it down',
        '$("p").addClass("special");\n\
"$": global jQuery function. can also be jQuery.\n\
"("p")": insert selector between quotes to find DOM element. returns in a "jquery collection".\n\
"addClass("special")": built-in jQuery method that adds the specified class to the collection.\n\
This is the output in our HTML:\n\
<p class="special">Hello Reactor Prep 5! How are you doing?</p>'
      ],[
        'How to include jQuery in your HTML',
        'Add Image'
      ],[
        'HTML and JavaScript interactions',
        'we are going to learn how to use JavaScript to select HTML elements and handle HTML events.\n\
We have a webpage that contains an image, we need to create a button that when pressed it changes the image on that page.\n\
So how do we do that :\n\
This is the image that we need to change and it have "id" of "myImage":\n\
Add Image\n\
First we create the button, and give it an "id":\n\
Add Image\n\
Second in JavaScript we can select elements in an html file using “document.getElementBy : Tag, Id or Class” and then the name of it inside parentheses. \n\
So now in our JavaScript file we need to select the button and the image using the id and assign them to a variable :\n\
Add Image\n\
Finally we need to detect the button click and handle it by changing the image source :\n\
Add Image\n\
And here is what we get.\n\
Add Image'
      ]
    ]
    const end = '';

    return (
      
      <Card>
        <CardSection>
          <View style = {headerConetentStyle}>
            <Text style = {headerTextStyle}>
              {topic}
            </Text>
          </View>				
        </CardSection>

        <CardSection>
          <Text>
          {introduction}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[0][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[0][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[1][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[1][1]}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={ boldText }>
            {body[2][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[2][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[3][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[3][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[4][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[4][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[5][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[5][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[6][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[6][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[7][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[7][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[8][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[8][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[9][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[9][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[10][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[10][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[11][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[1][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[12][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[12][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[13][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[13][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[14][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[14][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[15][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[15][1]}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ boldText }>
            {body[16][0]}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            {body[16][1]}
          </Text>
        </CardSection>



        <CardSection>
          <Text>
            {end}{"\n"}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Project')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 30
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  boldText: {
    fontWeight: 'bold'
  }
});
export default HTMLCSSjQuery;