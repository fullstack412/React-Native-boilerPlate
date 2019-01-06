import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../common';

class FinalQuiz extends Component {
  state = {
    quizData: {
      "quiz" : {
        "quiz1" : {
          "question1" : {
            "correctoption" : "option3",
            "options" : {
              "option1" : "Horizontal Text Machine Language",
              "option2" : "Hulk Thor Magneto Loki",
              "option3" : "Hypertext Markup Language",
              "option4" : "Hal taqulu Masalama La"
            },
            "question" : "What does HTML stand for?"
          },
          "question2" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "deliver butter",
                "option2" : "perform unit test",
                "option3" : "links HTML with Javascript code",
                "option4" : "adding styles to the website"
              },
            "question" : "What is the purpose of CSS?"
          },
          "question3" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "setInterval(myFunction(){}, 3000);",
                "option2" : "setInterval(myFunction(){}, 3);",
                "option3" : "setTimeout(myFunction(){}, 3000);",
                "option4" : "setTimeout(myFunction(){}, 3);",
              },
            "question" : "Which function performs myFunction every 3 seconds?"
          },
          "question4" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "<script src=\"lib/jquery.js\"></script>",
                "option2" : "<script src=\"src/index.js\"></script>"
              },
            "question" : "Which file should be loaded first in .html file? Assume index.js uses jQuery?"
          },
          "question5" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "Tool Does Development",
              "option2" : "Total Development Disaster",
              "option3" : "Teeth Destroy Dinosaur",
              "option4" : "Test Driven Development"
            },
            "question" : "What does TDD stand for?"
          },
          "question6" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "Write Code",
                "option2" : "Write Test",
                "option3" : "Run Test"
              },
            "question" : "What comes first?"
          },
          "question7" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "it('sample test', function(){})",
                "option2" : "beforeEach(function(){})"
              },
            "question" : "What runs first?"
          },
          "question8" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "describe()",
                "option3" : "it()",
                "option4" : "before()",
              },
            "question" : "What command is used to group multiple test cases together?"
          },
          "question9" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "details how much RAM is dedicated to the current test",
                "option2" : "specify how long the test cases should take",
                "option3" : "identifies each individual test cases",
                "option4" : "a scary movie clown"
              },
            "question" : "What does \"it\" do in testing?"
          },
          "question10" : {
            "correctoption" : "option1",
            "options" : {
              "option1" : "git init",
              "option2" : "git add",
              "option3" : "git push",
              "option4" : "git log"
            },
            "question" : "Which command should you use to initialize a new Git repository?"
          },
          "question11" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "git add",
                "option2" : "git push",
                "option3" : "git init",
                "option4" : "git commit -m 'message"
              },
            "question" : "Which command should you use after git add ."
          },
          "question12" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "git init",
                "option2" : "git log",
                "option3" : "git push",
                "option4" : "git pull",
              },
            "question" : "How to upload your local work to github"
          },
          "question13" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "git init",
                "option3" : "git push",
                "option4" : "git pull",
              },
            "question" : "How to update local git repo with newer version of Github repo?"
          },
          "question14" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "git icecream",
                "option2" : "git push",
                "option3" : "git add .",
                "option4" : "git merge"
              },
            "question" : "How to merge different git branches?"
          },
          "question15" : {
            "correctoption" : "option2",
            "options" : {
              "option1" : "['Matt','Mastodon','Cat']",
              "option2" : "['Matt','Cat']",
              "option3" : "'Matt,Cat'"
            },
            "question" : " var string=['hello','Matt','Mastodon','Cat','Dog'];\n function match(string){\n return filter(string,function(element){\n return element.includes('at')\n  }\n};   \n console.log(match); "
          },
          "question16" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "[2,4,6,8,10]",
                "option2" : "'2,4,6,8,10'",
                "option3" : "{2,4,6,8,10}"
              },
            "question" : "var number=[1,2,3,4,5,6,7,8,9,10] \n function even(number){\n return filter(number,function(num){\n return num%2 === 0\n })\n }; \n console.log(even);"
          },
          "question17" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "'exuberant, destruction, present'",
                "option2" : "['exuberant', 'destruction', 'present']",
                "option3" : "['exuberant', 'destruction']"
              },
            "question" : "var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; \n function result(words){\n return filter(words,function(string){ \n return string.length > 6 ;\n })\n };\n  console.log(result);"
          },
          "question18" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "var",
              "option2" : "const",
              "option3" : "let",
              "option4" : "while"
            },
            "question" : `
            We are trying to create a while loop, but something is missing. Fill in the blank.

            var foo = true;
            var num = 1;
            _____(foo) {
              console.log(num);
              num++;
              if (num === 3) {
                foo = false;
              }
            }
            `
          },
          "question19" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "num >= n",
                "option2" : "num <= n",
                "option3" : "n",
                "option4" : "sum < n"
              },
            "question" : `
            Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0.
            function sum(n) {
              var num = 0;
              var sum = 0;
              while (_________) {
                sum += num;
                num++;
              }
              return sum;
            }

            Fill in the blank.
            `
          },
          "question20" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "product++",
                "option2" : "product--",
                "option3" : "multiplier++",
                "option4" : "multiplier--"
              },
            "question" : `
            The factorial of n is the product of all the integers preceding n, starting with 1. Let's implement the factorial function.
            function factorial(n) { 
              var product = 1;
              var multiplier = 1;
              while (multiplier <= n) {
                product *= multiplier;
                ______________;
              } 
              return product;
            } 

            Fill in the blank;
            `
          },
          "question21" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "10 9 8 7 6 5 4 3 2 1",
              "option2" : "Happy New Year!",
              "option3" : "Happy New Year! 10 9 8 7 6 5 4 3 2 1",
              "option4" : "10 9 8 7 6 5 4 3 2 1 Happy New Year!"
              },
            "question" : `
            function countdown() {
              var num = 10;
              while (num > 0) {
                console.log(num);
                num--;
              }
              console.log('Happy New Year!');
            }

            countdown();

            What will be logged to the console?
            `
          },
          "question22" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "Blank 1: num > count, Blank 2: repeated += str, Blank 3: num++",
                "option2" : "Blank 1: num < count, Blank 2: repeated = str, Blank 3: num++",
                "option3" : "Blank 1: num < count, Blank 2: repeated += str, Blank 3: num++",
                "option4" : "Blank 1: num < count, Blank 2: repeated += str, Blank 3: num--"
              },
            "question" : `
            Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
            function repeatString(str, count) {
              var num = 0;
              var repeated = ''
              while (Blank 1) {
                Blank 2;
                Blank 3;
              }
              return repeated;
            }
            
            Fill in the blanks.

            `
          },
          "question23" : {
            "correctoption" : "option3",
            "options" : {
              "option1" : "var 'foo' = 'bar'",
              "option2" : "foo = bar",
              "option3" : "var foo = bar",
              "option4" : "Both the first and third options are proper variable declarations"
            },
            "question" : "Which of the following is a proper variable declaration?"
          },
          "question24" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "foobar",
                "option2" : "bar",
                "option3" : "Reference Error",
                "option4" : "1"
              },
            "question" : `
            function foo() {
              var bar = 1;
              console.log(bar);
              return 'foobar';
            }
            foo();

            What will be logged to the console?
            `
          },
          "question25" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "bar",
                "option2" : "world",
                "option3" : "hello world",
                "option4" : "Reference Error"
              },
            "question" : `
            var foo = 'bar';
            function hello() {
              foo = 'world';
              return 'hello world';
            }
            console.log(foo);
            hello();

            What will be logged to the console?

            `
          },
          "question26" : {
            "correctoption" : "option2",
            "options" : {
              "option1" : "bar",
              "option2" : "world",
              "option3" : "hello world",
              "option4" : "Reference Error"
              },
            "question" : `
            var foo = 'bar';
            function hello() {
              foo = 'world';
              return 'hello world';
            }
            hello();
            console.log(foo);

            What will be logged to the console?

            `
          },
          "question27" : {
            "correctoption" : "option4",
            "options" : {
                "option1" : "foo bar",
                "option2" : "2",
                "option3" : "world",
                "option4" : "Reference Error"
              },
            "question" : `
            function world() {
              var hello = 'foo bar';
              return 2;
            }
            world();
            console.log(hello);

            What will be logged to the console?
            `
          },
          "question28" : {
            "correctoption" : "option1",
            "options" : {
              "option1" : "Boolean",
              "option2" : "String",
              "option3" : "String and Boolean",
              "option4" : "Number"
            },
            "question" : "True is a "
          },
          "question29" : {
            "correctoption" : "option3",
            "options" : {
                "option1" : "Boolean",
                "option2" : "String",
                "option3" : "Number",
                "option4" : "String and Number"
              },
            "question" : "6 is a "
          },
          "question30" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "18",
                "option2" : "'99' (data type is a String)",
                "option3" : "99 (data type is a Number)",
                "option4" : "The console will return an error message because JavaScript doesn't support type coercion"
              },
            "question" : "console.log('9' + 9) will display ____ on the console"
          },
          "question31" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "1",
                "option2" : "2",
                "option3" : "3",
                "option4" : "4"
              },
            "question" : "10 % 3 ="
          },
          "question32" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "expression",
                "option2" : "declaration",
                "option3" : "expression and declaration",
                "option4" : "No idea. Coding is hard."
              },
            "question" : "function foo() { return 'bar' } is a function _____"
          },
          "question33" : {
            "correctoption" : "option2",
            "options" : {
              "option1" : "True",
              "option2" : "False"
            },
            "question" : "3 === '3' evaluates to"
          },
          "question34" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "True",
                "option2" : "False"
              },
            "question" : "2 != '2' evaluates to"
          },
          "question35" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "the block of code inside the if statement will be returned",
                "option2" : "the block of code inside the else statement will be returned"
              },
            "question" : `
            function ifElse(boolean){  
                if (boolean) {
                  return 'the block of code inside the if statement will be returned'
                } else {
                  return 'the block of code inside the else statement will be returned'
                }
              }
              
              ifElse (true);


              What will the function ifElse return in this scenario?
              `
          },
          "question36" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "True",
                "option2" : "False"
              },
            "question" : "'2' === 2 || 'hello' === 'hello' evaluates to"
          },
          "question37" : {
            "correctoption" : "option2",
            "options" : {
                "option1" : "True",
                "option2" : "False"
              },
            "question" : "'2' === 2 && 'hello' === 'hello' evaluates to"
          },
          "question38" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "true",
              "option2" : "false",
              "option3" : "hello",
              "option4" : "world"
            },
            "question" : `
            var array = [true, false, 'hello', 'world'];
            console.log(array[3]);

            What is logged to the console?
            `
          },
          "question39" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "array.push('foobar')",
                "option2" : "array.pop('foobar')",
                "option3" : "array.shift('foobar')",
                "option4" : "array.unshift('foobar')"
              },
            "question" : `
            var array = [true, false, 'hello', 'world'];
            
            I want to add 'foobar' to the end of this array. How would I do that?
            `
          },
          "question40" : {
            "correctoption" : "option4",
            "options" : {
              "option1" : "array.push('foobar')",
              "option2" : "array.pop('foobar')",
              "option3" : "array.shift('foobar')",
              "option4" : "array.unshift('foobar')"
              },
            "question" : `
            var array = [true, false, 'hello', 'world'];
            
            I want to add 'foobar' to the beginning of this array. How would I do that?
            `
          },
          "question41" : {
            "correctoption" : "option2",
            "options" : {
              "option1" : "BLANK1 = var i = 0, BLANK2 = i < array.length, BLANK3 = i--",
              "option2" : "BLANK1 = var i = 0, BLANK2 = i < array.length, BLANK3 = i++",
              "option3" : "BLANK1 = var i = 0, BLANK2 = i <= array.length, BLANK3 = i++",
              "option4" : "BLANK1 = var i = 1, BLANK2 = array.length < 1, BLANK3 = i++",
              },
            "question" : `
            var array = [true, false, 'hello', 'world'];
            for (BLANK1; BLANK2; BLANK3) {
              console.log(array[i]);
            }

            Fill in the blanks so that the console logs the following to the console:
            true
            false
            'hello'
            'world'
            `
          },
          "question42" : {
            "correctoption" : "option1",
            "options" : {
                "option1" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.push(array[i])",
                "option2" : "BLANK1 = array[i] % 2 === 0, BLANK2 = newArray.push(array[i])",
                "option3" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.pop(array[i])",
                "option4" : "BLANK1 = array[i] % 2 !== 0, BLANK2 = newArray.unshift(array[i])",
              },
            "question" : `
            Write a function remove that accepts an array of numbers and removes all even numbers from the array and returns a new array.

            var array = [1, 2, 3, 4, 5, 6]
            remove(array) // => [1, 3, 5]
            function remove(array) {
              var newArray = [];
              for (var i = 0; i < array.length; i++) {
                if (BLANK1 {
                  BLANK2
                }
              }
              return newArray;
            }

            Fill in the blanks.
            `
          }
        }
      }      
    }
  }

  render() {
    const { thumbnailStyle, headerConetentStyle, thumbnailContainerStyle, headerTextStyle, boldText } = Styles;
    return (
      <Card>
        <Playquiz quizData = { this.state.quizData }/>
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
export default FinalQuiz;