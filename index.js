const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.all('/slider', (req, res) => {
    console.log("Just got a request!")
    res.send([
        {
          "_id": "603b85ebd5b9560015caf9a8",
          "createdAt": "2021-02-28T12:00:43.980Z",
          "updatedAt": "2021-02-28T12:00:48.427Z",
          "image": {
            "_id": "603b85c5d5b9560015caf9a3",
            "name": "gemma-stpjHJGqZyw-unsplash.jpg",
            "caption": "Red Tamatarrrrrr",
            "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513603/gemma_stpj_HJ_Gq_Zyw_unsplash_9bf251892f.jpg",
          },
          "id": "603b85ebd5b9560015caf9a8"
        },
        {
            "_id": "603b85ebd5b9560015caf9a8",
            "createdAt": "2021-02-28T12:00:43.980Z",
            "updatedAt": "2021-02-28T12:00:48.427Z",
            "image": {
              "_id": "603b85c5d5b9560015caf9a3",
              "name": "gemma-stpjHJGqZyw-unsplash.jpg",
              "caption": "Green Vegitable",
              "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513609/neonbrand_9m2_R_Zv_HS_c_U_unsplash_6a14fab32a.jpg",
            },
            "id": "603b85ebd5b9560015caf9a8"
        },
        {
            "_id": "603b85ebd5b9560015caf9a8",
            "createdAt": "2021-02-28T12:00:43.980Z",
            "updatedAt": "2021-02-28T12:00:48.427Z",
            "image": {
              "_id": "603b85c5d5b9560015caf9a3",
              "name": "gemma-stpjHJGqZyw-unsplash.jpg",
              "caption": "",
              "url": "https://res.cloudinary.com/programming-night/image/upload/v1614513607/neonbrand_Svh_XD_3k_PSTY_unsplash_11a0e33129.jpg",
            },
            "id": "603b85ebd5b9560015caf9a8"
          },

      ])
})

app.all('/subjects', (req, res) => {
    console.log("Just got a request!")
    res.send([
        {
          "id": 1,
          "name": "English",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "English Grammer"
            },
            {
              "childId": 2,
              "childName": "English Text"
            },
            {
              "childId": 3,
              "childName": "English Rapid Reader"
            }
          ]
        },
        {
          "id": 2,
          "name": "Maths",
          "Category": 8,
          "Lang": "Assamese",
          "child": []
        },
        {
          "id": 3,
          "name": "Science",
          "Category": 8,
          "Lang": "Assamese",
            "child": [
                {
                    "childId": 1,
                    "childName": "Physics"
                },
                {
                    "childId": 2,
                    "childName": "Chemistry"
                },
                {
                    "childId": 3,
                    "childName": "Biology"
                  }
          ]
        },
        {
          "id": 4,
          "name": "Social Studies",
          "Category": 8,
          "Lang": "Assamese",
            "child": [
                {
                    "childId": 1,
                    "childName": "Political"
                },
                {
                    "childId": 2,
                    "childName": "Social"
                }
          ]
        },
        {
          "id": 4,
          "name": "MIL Assames",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "Assamese text"
              },
              {
                "childId": 2,
                "childName": "Assamese Rapid Reader"
              }
          ]
        },
        {
          "id": 4,
          "name": "Elective",
          "Category": 8,
          "Lang": "Assamese",
          "child": [
            {
              "childId": 1,
              "childName": "History"
            },
            {
              "childId": 2,
              "childName": "Geography"
            },
            {
              "childId": 3,
              "childName": "Advance Maths"
            },
            {
              "childId": 3,
              "childName": "Hindi"
            }
          ]
        }
      ])
})


app.all('/lessons', (req, res) => {
    console.log("Just got a request!")
    res.send([
        {
          "id": 1,
          "chapterid": "XVSHDGS",
          "lang": "Assamese",
          "class": 9,
          "tags": [
            "tag1",
            "tag2",
            "tag3"
          ],
          "title": "Pythagoras Theorem",
          "pnr": [
            {
              "id": "abcd",
              "chapterid":"a1b2c3",
              "name": "chapter 12"
            },
            {
              "id": "wxyz",
              "chapterid":"a1b2c3d4",
              "name": "chapter 14"
            }
          ],
          "summary": [
            {
              "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64",
              "explainations": "In mathematics, the Pythagorean theorem, or Pythagoras' theorem, is a fundamental relation in Euclidean geometry among the three sides of a right triangle. It states that the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two sides."
              },
              {
                "videoURL": "https://www.youtube.com/watch?v=dl6Iw1X4NQo",
                "explainations": "Pythagoras theorem states that “In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides“"
              }
          ],
          "intextQuestions": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=YompsDlEdtc"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
              },
              {
                "id": 2,
                "question": "2nd time Describe Pythagoras Theorem again",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=YompsDlEdtc"
                  }
                ]
              },
               {
                "id": 3,
                "question": "3nd time Describe Pythagoras Theorem again",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=YompsDlEdtc"
                  }
                ]
              }
          ],
          "excersize": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
              },
              {
                "id": 1,
                "question": "Describe Pythagoras Theorem",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                  },
                  {
                    "id": 2,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": ""
                  }
                ]
              },
              {
                "id": 1,
                "question": "Describe Pythagoras Theorem",
                "solutions": [
                  {
                    "id": 1,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                  },
                  {
                    "id": 2,
                    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "videoURL": ""
                  }
                ]
              }
          ],
          "mcq": [
            {
              "id": 1,
              "question": "lorem ipsum",
              "options": [
                {
                  "value1": "america",
                  "correct": "true"
                },
                {
                  "value1": "europe",
                  "correct": "false"
                },
                {
                  "value1": "africa",
                  "correct": "false"
                },
                {
                  "value1": "asia",
                  "correct": "false"
                }
              ]
            },
            {
              "id": 2,
              "question": "lorem ipsum dolor sit",
              "options": [
                {
                  "value1": "america",
                  "correct": "false"
                },
                {
                  "value1": "africa",
                  "correct": "false"
                },
                {
                  "value1": "europe",
                  "correct": "false"
                },
                {
                  "value1": "asia",
                  "correct": "true"
                }
              ]
            }
          ],
          "extra": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
            }
          ],
          "pyq": [
            {
              "id": 1,
              "question": "Describe Pythagoras Theorem",
              "solutions": [
                {
                  "id": 1,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": "https://www.youtube.com/watch?v=gKjJEabkC64"
                },
                {
                  "id": 2,
                  "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "videoURL": ""
                }
              ]
            }
          ]
        }
      ])
})


app.all('/chapters', (req, res) => {
    console.log("Just got a request!")
    res.send([
        {
          "id": 1,
          "subjectID": "XVSHDGS",
          "Lang": "English",
          "child": [
            {
              "Chaptid": 1,
              "ChaptName": "Matter in our surroundings",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 2,
              "ChaptName": "Is matter around us pure",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 3,
              "ChaptName": "Atoms and molecules",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 4,
              "ChaptName": "Structure of the atom",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 5,
              "ChaptName": "The fundamental unit of life",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 6,
              "ChaptName": "Tissues",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 7,
              "ChaptName": "Diversity in living organisms",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 8,
              "ChaptName": "Motion",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 90,
              "ChaptName": "Force and Laws of Motion",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 10,
              "ChaptName": "Gravitation",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 11,
              "ChaptName": "Work and energy",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 12,
              "ChaptName": "Sound",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 13,
              "ChaptName": "Why do we fall ill",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 14,
              "ChaptName": "Natural resources",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            },
            {
              "Chaptid": 15,
              "ChaptName": "Improvement in Food resources",
              "ChaptDesc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Thumbnail": ""
            }
          ]
        }
      ])
})




app.listen(process.env.PORT || 3000)
