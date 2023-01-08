import * as React from 'react';
import Config from '../assests/config.json';

export const AuthContext = React.createContext();

export const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => response.json())
}

export const categoryTypes = [{
  image: require('../assests/images/question-1.png'),
  name: 'Introduction',
  upperMessage: 'Please listen to this introduction track the first time you use this App. It will explain how you can get the best out of Stress Control.',
  infoMessage: 'This introduction track will explain how you can get the best out of Stress Control.',
  style: {
    width: 52,
    height: 52
  },
  containerStyle: {
    margin: 3,
    marginLeft: 5
  },
  avatarStyle: {
    width: 80,
    height: 80
  },
  avatarContainerStyle: {
    margin: 10
  },
  details: [{
    title: "Welcome to Stress Control",
    image: require('../assests/images/speaker.png'),
    music: "App_Introduction-new.mp3",
    hideAnimation: true,
    skipController: true,
    introduction: true,
    infoMessage: 'This introduction track will explain how you can get the best out of Stress Control.'
  }]
},
{
  image: require('../assests/images/belly_breathing.png'),
  name: 'Belly Breathing',
  upperMessage: 'Belly breathing is a technique to slow down your autonomic nervous system (ANS) by breathing from the diaphragm using a skill called 3:4 breathing.\n\nListen to the introduction then start with a full belly breathing track. Once you feel comfortable with 3:4 breathing you can move to the quick and music only tracks where you can experiment with different breathing paces and lengths of relaxation to find what works best for you.',
  infoMessage: 'Please select a category to view the Belly Breathing tracks available.',
  style: {
    width: 24,
    height: 55,
  },
  containerStyle: {
    margin: 3,
    marginLeft: 18,
  },
  avatarStyle: {
    width: 75,
    height: 70
  },
  avatarContainerStyle: {
    margin: 10,
    marginLeft: 15
  },
  details: [
    {
      title: "Introduction to Belly Breathing",
      image: require('../assests/images/question-1.png'),
      music: "Belly_Breathing_Introduction.mp3",
      infoMessage: 'This introduction will explain how you can get the best out of the Belly Breathing tracks.',
      hideAnimation: true,
      skipController: true,
      introduction: true
    }, {
      title: "With Background Music",
      image: require('../assests/images/musical-notes.png'),
      subCategory: [{
        title: "Full Belly Breathing",
        extraContent: "Jim",
        skipController: true,
        isVideo: true,
        video: "jim-full-with-music-new.mp4",
        infoMessage: 'This belly breathing track will teach you how to breathe from the diaphragm using 3:4 breathing.',
      },
      {
        title: "Full Belly Breathing",
        extraContent: "Ruth",
        skipController: true,
        isVideo: true,
        video: "Ruth-full-with-music-new.mp4",
        infoMessage: 'This belly breathing track will teach you how to breathe from the diaphragm using 3:4 breathing.',
      },
      {
        title: "Quick Belly Breathing",
        extraContent: "Jim",
        skipController: true,
        isVideo: true,
        video: "jim-quick-with-music-new.mp4",
        infoMessage: 'Once you have learned the Belly Breathing technique you can progress to this Quick version.',
      },
      {
        title: "Quick Belly Breathing",
        extraContent: "Ruth",
        skipController: true,
        isVideo: true,
        video: "Ruth-quick-with-music-new.mp4",
        infoMessage: 'Once you have learned the Belly Breathing technique you can progress to this Quick version.',
      }
      ]
    },
    {
      title: "No Background Music",
      image: require('../assests/images/no_music.png'),
      subCategory: [
        {
          title: "Full Belly Breathing",
          extraContent: "Jim",
          skipController: true,
          isVideo: true,
          video: "jim-full-no-music-new.mp4",
          infoMessage: 'This belly breathing track will teach you how to breathe from the diaphragm using 3:4 breathing.',
        },
        {
          title: "Full Belly Breathing",
          extraContent: "Ruth",
          skipController: true,
          isVideo: true,
          video: "Ruth_Voice-Only_Belly-Breathing.mp4",
          infoMessage: 'This belly breathing track will teach you how to breathe from the diaphragm using 3:4 breathing.',
        },
        {
          title: "Quick Belly Breathing",
          extraContent: "Jim",
          skipController: true,
          isVideo: true,
          video: "jim-quick-BB-no-music-time-extended.mp4",
          infoMessage: 'Once you have learned the Belly Breathing technique you can progress to this Quick version.',
        },
        {
          title: "Quick Belly Breathing",
          extraContent: "Ruth",
          skipController: true,
          isVideo: true,
          video: "Ruth-quick-BB-no-music-time-extended.mp4",
          infoMessage: 'Once you have learned the Belly Breathing technique you can progress to this Quick version.',
        }
      ]
    },
    {
      title: "Music Only",
      image: require('../assests/images/music.png'),
      video: '130bmp10mins.mp4',
      infoMessage: 'Experiment with different lengths of relaxation and breathing paces to find what works best for you. Level 1 is the quickest pace and 9 is the slowest.',
      levels: [{
        video: '200bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '200bmp5mins.mp4',
          '200bmp10mins.mp4',
          '200bmp15mins.mp4',
          '200bmp20mins.mp4'
        ]
      },
      {
        video: '180bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '180bmp5mins.mp4',
          '180bmp10mins.mp4',
          '180bmp15mins.mp4',
          '180bmp20mins.mp4'
        ]
      },
      {
        video: '166bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '166bmp5mins.mp4',
          '166bmp10mins.mp4',
          '166bmp15mins.mp4',
          '166bmp20mins.mp4'
        ]
      },
      {
        video: '147bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '147bmp5mins.mp4',
          '147bmp10mins.mp4',
          '147bmp15mins.mp4',
          '147bmp20mins.mp4'
        ]
      },
      {
        video: '130bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '130bmp5mins.mp4',
          '130bmp10mins.mp4',
          '130bmp15mins.mp4',
          '130bmp20mins.mp4'
        ]
      },
      {
        video: '113bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '113bmp5mins.mp4',
          '113bmp10mins.mp4',
          '113bmp15mins.mp4',
          '113bmp20mins.mp4'
        ]
      },
      {
        video: '100bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '100bmp5mins.mp4',
          '100bmp10mins.mp4',
          '100bmp15mins.mp4',
          '100bmp20mins.mp4'
        ]
      },
      {
        video: '90bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '90bmp5mins.mp4',
          '90bmp10mins.mp4',
          '90bmp15mins.mp4',
          '90bmp20mins.mp4'
        ]
      },
      {
        video: '80bmp10mins.mp4',
        isVideo: true,
        infoMessage: 'Use your 3:4 breathing in time with the music.',
        durationFile: [
          '80bmp5mins.mp4',
          '80bmp10mins.mp4',
          '80bmp15mins.mp4',
          '80bmp20mins.mp4'
        ]
      }
      ]
    }
  ]
},
{
  image: require('../assests/images/deep-relaxation.png'),
  name: 'Muscle Relaxation',
  upperMessage: 'Muscle Relaxation teaches you to slow down your ANS and relax your muscles – the two body groups most effected by stress. You will learn (with practise) to become aware of stress creeping into your body and will be able to nip it in the bud before it fully takes hold.',
  infoMessage: 'Please select a category to view the muscle relaxation tracks available.',
  style: {
    width: 45,
    height: 40
  },
  containerStyle: {
    margin: 8,
    marginLeft: 8
  },
  avatarStyle: {
    width: 75,
    height: 70
  },
  avatarContainerStyle: {
    margin: 10,
    marginLeft: 15
  },
  details: [
    {
      title: "Introduction to Muscle Relaxation",
      image: require('../assests/images/question-1.png'),
      music: "Muscle_Relaxation_Introduction.mp3",
      infoMessage: 'This introduction will explain how you can get the best out of the Muscle Relaxation tracks.',
      hideAnimation: true,
      skipController: true,
      introduction: true
    }, {
      title: "Deep Relaxation",
      image: require('../assests/images/deep-relaxation.png'),
      subCategory: [
        {
          title: "With background Music",
          image: require('../assests/images/musical-notes.png'),
          items: [
            {
              title: "Deep Relaxation",
              image: require('../assests/images/musical-notes.png'),
              extraContent: "Jim",
              orange_title: "Deep Relaxation",
              infoMessage: 'Start with Deep Relaxation, once you learn this skill you can progress to Quick Relaxation and the Music Only versions. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              innerContent: "You can also experiment with different breathing paces to find what works best for you.  Use your 3:4 breathing.",
              music: "Deep-Relaxation-Background-Music-Jim.mp3",
              levels: [{
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-Background-Music-Jim.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            },
            {
              title: "Deep Relaxation",
              image: require('../assests/images/musical-notes.png'),
              extraContent: "Ruth",
              orange_title: "Deep Relaxation",
              infoMessage: 'Start with Deep Relaxation, once you learn this skill you can progress to Quick Relaxation and the Music Only versions. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              innerContent: "You can also experiment with different breathing paces to find what works best for you.  Use your 3:4 breathing.",
              music: "Ruth_Music_Deep-Relaxation.mp3",
              levels: [{
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Deep-Relaxation.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            }
          ],
        },
        {
          title: "No Background Music",
          image: require('../assests/images/no_music.png'),
          items: [
            {
              title: "Deep Relaxation",
              image: require('../assests/images/no_music.png'),
              extraContent: "Jim",
              orange_title: "Deep Relaxation",
              infoMessage: 'Start with Deep Relaxation, once you learn this skill you can progress to Quick Relaxation and the Music Only versions. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              innerContent: "You can also experiment with different breathing paces to find what works best for you.  Use your 3:4 breathing.",
              music: "Deep-Relaxation-No-Music-Jim.mp3",
              levels: [{
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 10.67,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Deep-Relaxation-No-Music-Jim.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            },
            {
              title: "Deep Relaxation",
              image: require('../assests/images/no_music.png'),
              extraContent: "Ruth",
              orange_title: "Deep Relaxation",
              infoMessage: 'Start with Deep Relaxation, once you learn this skill you can progress to Quick Relaxation and the Music Only versions. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              innerContent: "You can also experiment with different breathing paces to find what works best for you.  Use your 3:4 breathing.",
              music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
              levels: [{
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 10.67,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Deep-Relaxation.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            }
          ],
        },
        {
          title: "Music Only",
          orange_title: "Music Only",
          image: require('../assests/images/music.png'),
          infoMessage: 'Once you have picked up the skill of Deep Relaxation you can use the music to guide you. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
          music: "Deep-Relaxation-Music-Only.mp3",
          levels: [{
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 4.8,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 5.33,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 5.78,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 6.53,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 7.38,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 8.5,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 9.6,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 10.66,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Deep-Relaxation-Music-Only.mp3",
            speed: 12,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          }
          ]
        }
      ]
    }, {
      title: "Quick Relaxation",
      image: require('../assests/images/musical-notes.png'),
      subCategory: [
        {
          title: "With Background Music",
          image: require('../assests/images/musical-notes.png'),
          items: [
            {
              title: "Quick Relaxation",
              image: require('../assests/images/musical-notes.png'),
              extraContent: "Jim",
              orange_title: "Quick Relaxation",
              music: "Quick-Relax-with-music-Jim.mp3",
              infoMessage: 'Once you pick up the skill of muscle relaxation in Deep Relaxation you can progress to this Quick version. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              levels: [{
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-with-music-Jim.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            },
            {
              title: "Quick Relaxation",
              image: require('../assests/images/musical-notes.png'),
              extraContent: "Ruth",
              orange_title: "Quick Relaxation",
              music: "Ruth_Music_Quick-Relaxation.mp3",
              infoMessage: 'Once you pick up the skill of muscle relaxation in Deep Relaxation you can progress to this Quick version. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              levels: [{
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Music_Quick-Relaxation.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            }
          ],
        },
        {
          title: "No Background Music",
          image: require('../assests/images/no_music.png'),
          items: [
            {
              title: "Quick Relaxation",
              image: require('../assests/images/no_music.png'),
              extraContent: "Jim",
              orange_title: "Quick Relaxation",
              music: "Quick-Relax-no-music-Jim.mp3",
              infoMessage: 'Once you pick up the skill of muscle relaxation in Deep Relaxation you can progress to this Quick version. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              levels: [{
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Quick-Relax-no-music-Jim.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            },
            {
              title: "Quick Relaxation",
              image: require('../assests/images/no_music.png'),
              extraContent: "Ruth",
              orange_title: "Quick Relaxation",
              music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
              infoMessage: 'Once you pick up the skill of muscle relaxation in Deep Relaxation you can progress to this Quick version. Use your 3:4 breathing to breathe calmly as you listen to the track.',
              levels: [{
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 4.8,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 5.33,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 5.78,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 6.53,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 7.38,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 8.5,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 9.6,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 10.66,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              },
              {
                music: "Ruth_Voice-Only_Quick-Relaxation.mp3",
                speed: 12,
                infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
              }
              ]
            }
          ],
        },
        {
          title: "Music Only",
          orange_title: "Music Only",
          innerContent: "Once you have picked up the muscle relaxation skill you can use the music to guide you. You can also experiment with different breathing paces and lengths of relaxation to find what works best for you.  Use your 3:4 breathing.",
          music: "Quick-Relax-music-only.mp3",
          image: require('../assests/images/music.png'),
          infoMessage: 'Once you have picked up the skill of Quick Relaxation you can use the music to guide you. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
          levels: [{
            music: "Quick-Relax-music-only.mp3",
            speed: 4.8,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 5.33,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 5.78,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 6.53,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 7.38,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 8.5,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 9.6,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 10.67,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          },
          {
            music: "Quick-Relax-music-only.mp3",
            speed: 12,
            infoMessage: 'Use your 3:4 breathing to breathe calmly as you listen to the track.'
          }
          ]
        }]
    }
  ]
},
{
  image: require('../assests/images/mindful.png'),
  name: 'Mindfulness',
  infoMessage: 'Please select a category to view the mindfulness tracks available.',
  upperMessage: 'Mindfulness teaches us to live in the present moment by focusing our attention on our thoughts, bodies and surroundings. It can decrease stress and boost wellbeing by teaching us to acknowledge and accept our thoughts and feelings.',
  style: {
    width: 45,
    height: 45
  },
  containerStyle: {
    margin: 6,
    marginLeft: 8
  },
  avatarStyle: {
    width: 75,
    height: 70
  },
  avatarContainerStyle: {
    margin: 10,
    marginLeft: 15
  },
  details: [
    {
      title: "Introduction to Mindfulness",
      image: require('../assests/images/question-1.png'),
      music: "Mindfulness_Introduction.mp3",
      infoMessage: 'This introduction will explain how you can get the best out of the Mindfulness tracks.',
      hideAnimation: true,
      skipController: true,
      introduction: true
    },
    {
      title: "Mindful Breathing",
      //   innerContent: "Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.",
      image: require('../assests/images/mindful.png'),
      subCategory: [
        {
          title: "Full Mindful Breathing",
          items: [
            {
              title: "With background music",
              extraContent: "Jim",
              music: "Full-Mindful-Breathing-with-music-Jim.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Jim.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "With background music",
              extraContent: "Ruth",
              music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-with-music-Ruth.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "No background music",
              extraContent: "Jim",
              music: "Full-Mindful-Breathing-no-music-Jim.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Full-Mindful-Breathing-no-music-Jim.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "No background music",
              extraContent: "Ruth",
              music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Full-Mindful-Breathing.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            }
          ]
        },
        {
          title: "Quick Mindful Breathing",
          image: require('../assests/images/mindful.png'),
          items: [
            {
              title: "With background music",
              extraContent: "Jim",
              music: "Quick-Mindful-breathing-Jim.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Quick-Mindful-breathing-Jim.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "With background music",
              extraContent: "Ruth",
              music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Music_Quick-Mindful-Breathing.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "No background music",
              extraContent: "Jim",
              music: "QuickMindfulbreathing-Jim_no-music.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "QuickMindfulbreathing-Jim_no-music.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
            {
              title: "No background music",
              extraContent: "Ruth",
              music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
              infoMessage: 'Once you have learned the belly breathing technique you can add mindfulness to your 3:4 breathing. Breathe calmly at a pace that best suits you.',
              hideAnimation: false,
              skipController: false,
              levels: [{
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 4.8,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 5.33,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 5.78,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 6.53,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 7.38,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 8.5,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 9.6,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 10.67,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              },
              {
                music: "Ruth_Voice-Only_Mindful-Breathing.mp3",
                speed: 12,
                infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
              }
              ]
            },
          ]
        },
        {
          title: "Music Only",
          image: require('../assests/images/music.png'),
          music: "Mindful-breathing-music-only.mp3",
          infoMessage: 'Once you have learned the Mindful Breathing technique you can use the music to guide you. Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.',
          levels: [{
            music: "Mindful-breathing-music-only.mp3",
            speed: 4.8,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 5.33,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 5.78,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 6.53,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 7.38,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 8.5,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 9.6,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 10.67,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Mindful-breathing-music-only.mp3",
            speed: 12,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          }
          ]

        }
      ]
    },
    {
      title: "Leaves in the Stream",
      image: require('../assests/images/leaf.png'),
      subCategory: [{
        title: "ًWith Background Music",
        items: [{
          title: "Leaves in the Stream",
          orange_title: "Leaves in the Stream",
          extraContent: "Jim",
          infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
          music: "LeavesInTheStream-withMusic-Jim.mp3",
          levels: [{
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 4.8,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 5.33,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 5.78,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 6.53,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 7.38,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 8.5,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 9.6,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 10.67,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Jim.mp3",
            speed: 12,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          }
          ]
        },
        {
          title: "Leaves in the Stream",
          orange_title: "Leaves in the Stream",
          extraContent: "Ruth",
          infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
          music: "LeavesInTheStream-withMusic-Ruth.mp3",
          levels: [{
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 4.8,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 5.33,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 5.78,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 6.53,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 7.38,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 8.5,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 9.6,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 10.67,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-withMusic-Ruth.mp3",
            speed: 12,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          }
          ]
        }
        ]
      },
      {
        title: "No Background Music",
        image: require('../assests/images/no_music.png'),
        items: [{
          title: "Leaves in the Stream",
          orange_title: "Leaves in the Stream",
          extraContent: "Jim",
          infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
          music: "LeavesInTheStream-voice-only-Jim.mp3",
          levels: [{
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 4.8,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 5.33,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 5.78,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 6.53,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 7.38,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 8.5,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 9.6,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 10.67,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "LeavesInTheStream-voice-only-Jim.mp3",
            speed: 12,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          }
          ]
        },
        {
          title: "Leaves in the Stream",
          orange_title: "Leaves in the Stream",
          extraContent: "Ruth",
          infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
          music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
          levels: [{
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 4.8,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 5.33,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 5.78,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 6.53,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 7.38,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 8.5,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 9.6,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 10.67,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          },
          {
            music: "Ruth_Voice-Only_Leaves-In-The-Stream.mp3",
            speed: 12,
            infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
          }
          ]
        }
        ],

      },
      {
        title: "Music Only",
        orange_title: "Music Only",
        image: require('../assests/images/musical-notes.png'),
        infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
        music: "LeavesInTheStreamMusicOnly.mp3",
        innerContent: "Once you have picked up this mindfulness skill you can use the music to guide you. You can also experiment with different breathing paces and lengths of relaxation to find what works best for you.  Use your 3:4 breathing.",
        levels: [{
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 4.8,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 5.33,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 5.78,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 6.53,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 7.38,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 8.5,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 9.6,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 10.67,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        },
        {
          music: "LeavesInTheStreamMusicOnly.mp3",
          speed: 12,
          infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
        }
        ]
      }]
    },
    {
      title: "The Body Scan",
      image: require('../assests/images/body-scan.png'),
      subCategory: [
        {
          title: "ًWith Background Music",
          items: [{
            title: "The Body Scan",
            orange_title: "The Body Scan",
            extraContent: "Jim",
            infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
            music: "BodyScan.mp3",
            levels: [{
              music: "BodyScan.mp3",
              speed: 4.8,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 5.33,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 5.78,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 6.53,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 7.38,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 8.5,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 9.6,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 10.67,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "BodyScan.mp3",
              speed: 12,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            }
            ]
          },
          {
            title: "The Body Scan",
            orange_title: "The Body Scan",
            extraContent: "Ruth",
            infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
            music: "Ruth_Music_The-Body-Scan.mp3",
            levels: [{
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 4.8,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 5.33,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 5.78,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 6.53,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 7.38,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 8.5,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 9.6,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 10.67,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Music_The-Body-Scan.mp3",
              speed: 12,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            }
            ]
          }
          ]
        },
        {
          title: "No Background Music",
          image: require('../assests/images/no_music.png'),
          items: [{
            title: "The Body Scan",
            orange_title: "The Body Scan",
            extraContent: "Ruth",
            infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
            music: "Ruth_Voice-Only_Body-Scan.mp3",
            levels: [{
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 4.8,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 5.33,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 5.78,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 6.53,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 7.38,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 8.5,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 9.6,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 10.67,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            },
            {
              music: "Ruth_Voice-Only_Body-Scan.mp3",
              speed: 12,
              infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
            }
            ]
          }
          ]
        }
      ]

    }
  ]
},
{
  image: require('../assests/images/star.png'),
  name: 'Bonus Tracks',
  upperMessage: "In this relaxation track we use your imagination to produce a sense of calmness. Use your 3:4 breathing to breathe calmly at a pace that best suits you.",
  infoMessage: 'Please select a track.',
  style: {
    width: 45,
    height: 45
  },
  containerStyle: {
    margin: 6,
    marginLeft: 7
  },
  avatarStyle: {
    width: 75,
    height: 75
  },
  avatarContainerStyle: {
    margin: 12
  },
  details: [
    {
      title: "Floating Visualisation",
      image: require('../assests/images/floating-visualisation.png'),
      infoMessage: "Experiment with different breathing paces to find what works best for you. Use your 3:4 breathing to breathe calmly as you listen to the track.",
      subCategory: [
        {
          title: "ًWith Background Music",
          image: require('../assests/images/musical-notes.png'),
          items: [
            {
              title: "Floating Visualisation",
              orange_title: "Floating Visualisation",
              extraContent: "Jim",
              music: "FloatingVisualisation-Jim.mp3",
              levels: [
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 4.8,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 5.33,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 5.78,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 6.53,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 7.38,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 8.5,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 9.6,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 10.67,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "FloatingVisualisation-Jim.mp3",
                  speed: 12,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                }
              ]
            },
            {
              title: "Floating Visualisation",
              orange_title: "Floating Visualisation",
              extraContent: "Ruth",
              music: "Ruth_Music_Floating-Visualisation.mp3",
              levels: [
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 4.8,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 5.33,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 5.78,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 6.53,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 7.38,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 8.5,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 9.6,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 10.67,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Music_Floating-Visualisation.mp3",
                  speed: 12,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                }
              ]
            }
          ]
        },
        {
          title: "ًNo Background Music",
          image: require('../assests/images/no_music.png'),
          items: [
            {
              title: "Floating Visualisation",
              orange_title: "Floating Visualisation",
              extraContent: "Ruth",
              music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
              levels: [
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 4.8,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 5.33,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 5.78,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 6.53,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 7.38,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 8.5,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 9.6,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 10.67,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                },
                {
                  music: "Ruth_Voice-Only_Floating-Visualisation.mp3",
                  speed: 12,
                  infoMessage: "Use your 3:4 breathing to breathe calmly as you listen to the track.",
                }
              ]
            }
          ]
        }
      ]
    }],
},
{
  image: require('../assests/images/video.png'),
  name: 'Relaxing Music',
  infoMessage: 'Please select a track.',
  upperMessage: 'Here are links to some of the most relaxing and uplifting music we know. We hope you enjoy them too. You could carry out your 3:4 breathing as you listen. Please note these are links to YouTube.',
  style: {
    width: 45,
    height: 45
  },
  containerStyle: {
    margin: 6
  },
  // showDetailText: false,
  avatarStyle: {
    width: 70,
    height: 70
  },
  avatarContainerStyle: {
    margin: 12
  },
  details: [{
    title: "Andrew York, classical guitarist",
    image: require('../assests/images/video.png'),
    extraContent: "",
    subCategory: [{
      title: "Home",
      link: "https://www.youtube.com/watch?v=6ajTcwJBbw4",
    },
    {
      title: "Squares Suspended",
      link: "https://www.youtube.com/watch?v=xIHkWwG-4TM&list=RD6ajTcwJBbw4&index=3",
    },
    {
      title: "The Equations of Beauty ‘e’",
      link: "https://www.youtube.com/watch?v=-uxgQ34SLJI&list=RDxIHkWwG-4TM&index=13",
    }
    ]
  },
  {
    title: "Andrew York and Brian Gore",
    image: require('../assests/images/video.png'),
    extraContent: "",
    link: "https://www.youtube.com/watch?v=Mf7BUHaUAUA&list=RDxIHkWwG-4TM&index=5"
  },
  {
    title: "Andrew York and Maneli Jamal",
    image: require('../assests/images/video.png'),
    extraContent: "",
    link: "https://www.youtube.com/watch?v=FTOCeO-E_PE",
  },
  {
    title: "Maneli Jamal",
    image: require('../assests/images/video.png'),
    extraContent: "",
    subCategory: [{
      title: "Running fox trail",
      link: "https://www.youtube.com/watch?v=YEWu1TbJk6s&list=RDEMHaYnDVX8hdeFHFI8FwjRAQ&index=7",
    },
    {
      title: "Adapt and Accept (part 1)",
      link: "https://www.youtube.com/watch?v=RL7DFqUHK04",
    },
    {
      title: "Break of dawn",
      link: "https://www.youtube.com/watch?v=jMHpJzZppIc",
    }
    ]
  },
  {
    title: "Arvo Part, Estonian composer",
    image: require('../assests/images/video.png'),
    link: "https://www.youtube.com/watch?v=FZe3mXlnfNc",
    extraContent: "",
  },
  {
    title: "Final Suggestion",
    image: require('../assests/images/video.png'),
    subCategory: [{
      title: "Watch now",
      link: "https://www.youtube.com/watch?v=sTJ7AzBIJoI",
      subContent: "The final suggestion is a bit different: Baz Luhrmann's ‘Everybody's free to wear sunscreen’. Music video from 1999, based on a 1997 essay by Mary Schmich, a columnist with the Chicago Tribune — which offers some quirky advice on how to live well.",
    }]
  },
  ]
}
]

export const config = Config;
