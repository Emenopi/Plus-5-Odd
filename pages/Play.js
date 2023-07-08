import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineConsoleSql, AiOutlineRight } from 'react-icons/ai'
import { BiCheck } from "react-icons/bi";


function GamePlay () {
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [scoreHeight, setScoreHeight] = useState(0);
  const [maxScore, setMaxScore] = useState(100);
  const [numerand, setNumerand] = useState(123);
  const [multiplier, setMultiplier] = useState(12);
  const [operation, setOperation] = useState('x');
  const [messageIndex, setMessageIndex] = useState(0);
  const [tutorialActive, setTutorial] = useState('visible');
  const [rtl, setRtl] = useState(true);
  

  const tutorial12 = [
    "Hi! I'm TrachtenBunny, let's start with how to multiply by 12 using the Basic Method!",
    `Multiplication by 12 has only one step! <br /> <b>"Double each digit and add its neighbour"</b>`,
    "In the Trachtenberg method, we always work from right to left so if we're multiplying by 123, we start on the 3, then the 2, then the 1",
    "Most rules involve the 'neighbouring' number, this means the one to the right (if there is one!) so for 123:<br /> 1's neighbour is 2,<br /> 2's neighbour is 3,<br /> and 3 doesn't have a neighbour",
    "Let's work through an example for multiplication by 12 together! Are you ready?",
    `The rule for multiplication by 12 is:<br /> <b>"Double each digit and add its neighbour"</b><br /><br /> First let's apply this rule to the right-most digit below (3)<br /> <b>Since 3 has no neighbour to add, we simply double it to make 6!</b>`,
    "Next we move leftwards to the next digit (2)!<br /><b>2's neighbour is 3, so we double the 2 and add 3 to make 7!</b>",
    "Then we repeat the rule again, this time on the 1.<br /><b>Double 1 plus 2 is 4!</b>",
    "Since there are no more numbers to the left of the 1, we can pretend there is a 0 and apply the rule again!<br /> <b>This gives us our final digit in the answer...1!</b>",
    "Are you ready to try yourself?"
  ]


  const [message, setMessage] = useState(`${tutorial12[0]}`);
  const [messageArray, setMessageArray] = useState(tutorial12);


  function inputButton(value, {answer, setAnswer}) {
    answer == null && setAnswer('');
    let answerCopy = answer.toString();

    if (rtl == true) {
      answerCopy = value.toString() + answerCopy
    } else {
      answerCopy = answerCopy + value.toString()
    }
    setAnswer(answerCopy);
  }

  function checkAnswer({answer, setAnswer, numerand, setNumerand, multiplier, setMultiplier, score, setScore, maxScore, setMaxScore, setScoreHeight, level, setLevel, setTutorial}) {
    
    let scoreCopy = score;

    if (operation == 'x' && answer == numerand * multiplier) {
      scoreCopy = score + 10;
      setScore(scoreCopy);
      setAnswer('');

          if (score >= maxScore - 10) {
            setLevel(level + 1);
            setTutorial('visible');
            tutorialNext({messageArray, setMessage, messageIndex, setMessageIndex, setTutorial, level, setNumerand, numerand, multiplier, setAnswer});
            setScoreHeight(38);
            setMaxScore(200);
          } else {
            setNumerand(Math.floor(Math.random() * 10000))
          }
      
    } else if (operation == '+' && answer == numerand + multiplier) {
      scoreCopy = score + 10;
      setScore(scoreCopy);
      setAnswer('');

          if (score >= maxScore) {
            setLevel(level + 1);
            setTutorial('visible');
            tutorialNext({messageArray, setMessage, messageIndex, setMessageIndex, setTutorial, level, setNumerand, numerand, multiplier, setAnswer});
          } else {
            if (level == 1) {
              let sum = (Math.floor(Math.random() * 3 + 9))
              let numer = Math.floor(Math.random() * 10 + 1)
              setNumerand(numer)
              if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
            } else if(level == 2){              
                let sum = (Math.floor(Math.random() * 12 + 1))
                let numer = Math.floor(Math.random() * 10 + 1)
                setNumerand(numer)
                if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
            }  else if (level == 3) {
              setMaxScore(score + 200);
              let sum = (Math.floor(Math.random() * 21 + 1))
              let numer = Math.floor(Math.random() * 10 + 1)
              setNumerand(numer)
              if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
              setRtl(false);
            }          
            else            
            {setNumerand(Math.floor(Math.random() * 10000))}
          }
    } else {
      score > 2 && (scoreCopy = score - 2);
      setScore(scoreCopy);
    }

    let height = Math.floor(38 * (scoreCopy / maxScore))
    setScoreHeight(height)
  }


  function tutorialNext ({messageArray, setMessageArray,setMessage, messageIndex, setMessageIndex, setTutorial, level, setNumerand, numerand, multiplier, setAnswer}) {
    
    const tutorialShortcutsAdd1 = [
      "See? That wasnt so bad! With some practice, we'll get faster!",
      "Before we move on to the next numbers, let's practice some shortcuts to improve our speed",
      "Since the Trachtenberg method relies on addition, it would be helpful if we could look at any two digits and instantly know their sum, right?",
      "First we can practice remembering digit pairs that add up to 10:<br /><b>[1 9] [2 8] [3 7] [4 6] and [5 5]</b><br /> Try to look at these pairs and think of 10 without counting",
      "Since we automatically know which numbers add to 10, the pairs for 9 should be easy! They're the same but the 2nd digit is 1 less:<br /> <b>[1 8] [2 7] [3 6] [4 5]</b><br /> Again try to look at these and think of the sum without doing any counting",
      "Similarly, the pairs that add to 11 are the same as the ones that add to 10 but one digit is 1 higher:<br /> <b>[2 9] [3 8] [4 7] [5 6]</b>",
      "Try to look at how each pair of numbers relates to a similar pair that makes 10...for sums of 9 and 11 this means we only have to add or subtract 1",
      "Have a practice yourself, and try to get the answer directly without counting more than 1"
    ]
  
    const tutorialShortcutsAdd2 = [
      "",
      "But what about sums of other numbers?",
      "Don't worry! 1, 2, 3, and 4 are easy!<br /> <b>[0 1] ; [0 2] [1 1] ; [0 3] [1 2] ; [0 4] [1 3] [2 2]<b><br />......Do you see a pattern?",
      "The easy pairs have a 0, 1, or are half of an even number, so that takes a big load off!<br /> Anything plus 2 is also easy since youŕe just counting in odds or evens!",
      "This means that 5's pairs are also all easy:<br /> <b>[0 5] [1 4] [2 3]</b>",
      "We can do the same for 6!<br /> <b>[0 6] [1 5] [2 4] and [3 3]</b> are easy pairs!",
      "For 7 we have only 3 easy pairs:<br /> <b>[0 7] [1 6] [2 5]</b> <br />but don't worry! Since 6 has <b>[3 3]</b> we can just add 1 like we do for pairs of 11 so <b>[3 4]</b> isn't so hard to remember now!",
      "For sums up to 10, that just leaves 8: <br /> <b>[0 8] [1 7] [2 6] [3 5] and [4 4]</b><br />Notice again we only have one non-easy pair:<br /> <b>[3 5]</b>",
      "Now let's practice all of this!"
    ]

    const tutorialShortcutsAdd3 = [
      "",
      "Amazing! Now one more note on addition...often we have to add higher than 11, but don't worry, there are some tricks for this too!",
      "Since the tens digit is carried, we don't often have to think about it, so it's more helpful to think about how going over 1 affects the unit digit...this is actually related to the addition pairs we already learned about which add up to 10!",
      "Since the pairs adding to 10 are:<br /> <b>[0 10] [1 9] [2 8] [3 7] [4 6] [5 5]</b> <br /> we can say that whenever we use one number in the pair and exceed 10, the unit digit of the answer will be the same as the number we're adding to MINUS the other number in the pair",
      "Confusing? Let's look at some examples:<br /> 8 + 9 = 17 ... notice how the 7 is one less than the 8? 9 is paired with 1 so the 8 is reduced by 1 and since we exceed 10, the tens digit is carried over<br />6 + 8 = 14 ...notice here that the 6 is reduced by 2 to get the 4 as the answer's unit digit? This is because 8 and 2 are paired",
      "This works with any numbers in the pairs adding to 10 except 10 itself",
      "Let's have a practice! Remember to avoid counting to get the answer!"
    ]

    let ans = (numerand * multiplier).toString();
    let index = ans.length - (messageIndex - 4);
    let nextMsg = messageArray;

    level == 0 && (nextMsg = tutorialShortcutsAdd1);
    level == 1 && (nextMsg = tutorialShortcutsAdd2);
    level == 2 && (nextMsg = tutorialShortcutsAdd3);

    level == 1 && setOperation('+');

    if (messageIndex <= (messageArray.length - 2)) {
      setMessage(`${messageArray[messageIndex + 1]}`);
      setMessageIndex(messageIndex + 1)
      level == 0 && messageIndex >= 5 && setAnswer(ans.slice(index, ans.length));
    }
    else {setTutorial('invisible'); setNumerand(Math.floor(Math.random() * 10000)); setAnswer(''); setMessageIndex(0); setMessage(`${nextMsg[0]}`); setMessageArray(nextMsg); 
    setScoreHeight(0);
    if (level == 1) {
      setMaxScore(score + 200);
      let sum = (Math.floor(Math.random() * 3 + 9))
      let numer = Math.floor(Math.random() * 10 + 1)
      setNumerand(numer)
      if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
    }else if (level == 2) {
      setMaxScore(score + 200);
      let sum = (Math.floor(Math.random() * 12 + 1))
      let numer = Math.floor(Math.random() * 10 + 1)
      setNumerand(numer)
      if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
      setRtl(false);
    } else if (level == 3) {
      setMaxScore(score + 200);
      let sum = (Math.floor(Math.random() * 21 + 1))
      let numer = Math.floor(Math.random() * 10 + 1)
      setNumerand(numer)
      if (sum > numer) {setMultiplier(sum - numer)} else {setMultiplier(numer - sum)}
      setRtl(false);
    }

    }
    
  }

  return (
    <div>
    <div className = 'relative flex w-[90vw] h-[80vh] border border-teal-500 rounded-md bg-transparent'></div>
    <div className = {`${tutorialActive} speech-bubble grid grid-col absolute bottom-[58vh] left-[14vw] flex w-[75vw] p-5 rounded-md font-lato z-20`}>
      <div key = {message} className = 'mb-3 roll' dangerouslySetInnerHTML={{__html: message}} ></div>
      <div className = 'p-1 px-2 text-white font-lato font-bold tracking-widest text-sm bg-[#7d4acb] border border-black rounded-md w-fit'
            onClick = {() => {tutorialNext({messageArray, setMessageArray, setMessage, messageIndex, setMessageIndex, setTutorial, level, setNumerand, numerand, multiplier, setAnswer})}}>Next</div>
    </div>
    <div className = 'flex -mt-[80vh] w-[90vw] h-[6vh] bg-[#7d4acb] rounded-md pl-5 items-center font-lato text-2xl'>{score}</div>
    <div className = 'flex justify-center align-center h-[70vh] overflow-hidden'>
    <div className = 'flex justify-center border border-[#121221] -mt-[3vh] rounded-full w-[89vw] h-[60vh] radial'>
    <div className = 'absolute left-[8vw] bottom-[38vh] h-[38vh] w-[15px] border b-white'>
      <div key = {scoreHeight} className = {`absolute bottom-0 -left-[1px] border b-white w-[15px] bg-gradient-to-t from-teal-500 to-[#7d4acb]`} style = {{'height': `${scoreHeight}vh`}}></div>
    </div>
    <div className = 'place-self-center mb-[10vh]'>
      <Image src = '/trachtenbunnyLong0.png' alt = ''  quality = {100}
                    width = '500'
                    height = '500'
                    className = {`w-[16vh] ${tutorialActive == 'invisible' && 'animate-jump-smooth'}`} />
      </div>
      </div>
    </div>
    <div className = 'absolute bottom-[36vh] left-[38vw] text-4xl text-white font-lilita'>
      <div className = 'absolute -right-[35vw] bottom-0 tracking-[.3em]'>{numerand}</div>
      <div className = 'absolute -right-[50vw] bottom-1 text-3xl tracking-widest'>{operation} {multiplier}</div>
    </div>
    <div className = 'absolute flex -mt-[24vh]  ml-2 w-[8vw] h-[4vh] bg-[#7d4acb] font-lilita text-lg rounded-md z-30 justify-center'
          onClick = {() => setAnswer(answer.slice(1))}>
    <AiOutlineRight size = {24} className='text-white self-center'/>
    </div>
    <div className = 'relative flex w-[68vw] h-[10vh] bg-teal-500 -mt-[25vh] rounded-md z-20'>
      <input className = 'bg-teal-500 text-right text-2xl rounded-md w-[68vw] h-[10vh]' type = "number"
        onChange = {e => setAnswer(e.target.value)} value = {answer}></input>
    </div>
      <div className = 'relative flex w-[8vw] h-[10vh] bg-[#ff4ae8] -mt-[10vh] ml-[70vw] rounded-md z-20 font-lato text-xl text-white justify-center'
            onClick = {() => checkAnswer({answer, setAnswer, numerand, setNumerand, multiplier, setMultiplier, score, setScore, maxScore, setMaxScore, setScoreHeight, scoreHeight, level, setLevel, setTutorial})}>
        <BiCheck size = {34} className='text-white self-center'/>
      </div>
    <div className = 'relative flex w-[8vw] h-[10vh] bg-[#c71251] -mt-[10vh] ml-[80vw] rounded-md text-center'>
      <div className = 'w-[8vw] h-[10vh] font-lato text-4xl text-center text-white pt-4'
            onClick = {() => setAnswer('')}>X</div>
    </div>
    <div className = 'grid grid-cols-5 h-[20vh] p-5 gap-4 content-stretch font-lilita text-xl'>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(1, {answer, setAnswer})}}>1</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(2, {answer, setAnswer})}}>2</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(3, {answer, setAnswer})}}>3</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(4, {answer, setAnswer})}}>4</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(5, {answer, setAnswer})}}>5</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(6, {answer, setAnswer})}}>6</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(7, {answer, setAnswer})}}>7</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(8, {answer, setAnswer})}}>8</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(9, {answer, setAnswer})}}>9</div>
      <div className = 'grow bg-teal-500 rounded-md p-2 text-center z-30'
            onClick={()=> {inputButton(0, {answer, setAnswer})}}>0</div>
    </div>
  </div>

  )
}

export default function Play () {
    return (
        <div className = 'flex w-screen h-screen justify-center'>
          <div className = 'flex w-[90vw] h-[80vh] mt-28'>
              <GamePlay />

          </div>
        </div>
    )   
}