import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { AiOutlineRight } from 'react-icons/ai'
import Header from 'components/Header'
import { rule } from 'postcss'

function toggleSection ({sectionIndex, setSection, rulesSelected, setRulesSelected}, index) {
    {sectionIndex != 0 ? setSection(0) : setSection(index)};
    {rulesSelected != 0 && setRulesSelected(0)}
}

function toggleRules ({rulesSelected, setRulesSelected}, selection) {
    {rulesSelected == selection ? setRulesSelected(0) : setRulesSelected(selection)}
}

function Rules3 ({rulesSelected, setRulesSelected}) {  
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 3) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 3</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 3)}}/>
    <div className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
        <ol style={{listStyleType: 'decimal'}} className='pl-5'>
                <li className='pl-5 pb-5'>Units digit: Subtract from 10, double, add 5 if odd</li>
                <li className='pl-5 pb-5'>Working right to left: Subtract from 9, double, add half the right-hand neighbour, and add 5 if odd</li>
                <li className='pl-5 pb-5'>Last step: Subtract 2 from half the left-most digit</li>
        </ol>
    </div>
    <div className='pt-16 text-center'>
        <p>Note that this "if odd" condition applies to the working and <b>NOT</b> its right-hand neighbour</p>
        <p className='pt-5'>When halfing odd digits, always round down e.g. half of 3 is 1, half of 5 is 2, etc.</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 567 x 3</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        Subtracting 7 from 10 is 3, doubled is 6, and since 7 is odd, add 5 to give 11:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***(1)1</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then we subtract 6 from 9 which gives 3.
        Doubling and adding the half the neighbour plus the carried 1 gives 10:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**(1)01</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        Now we take 5 from 9 to give 4.
        Doubling, adding half the neighbour, the odd 5, and the carried 1 makes 17:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*(1)701</div>

        <div className = 'col-span-3 border-r p-5'>
        Finally we take 2 from half of 5 and add the carried 1 which gives 1:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>1701</b></div>

    </div>
    <p className = 'pt-16 text-center'>As per the rules for 4, 8 and 9, the rules for 4 can take some time to learn.</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 3186 x 3:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First the 6 is subtracted from 10 and doubled to make 8:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****8</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then take the 8 away from 9 and doubled to make 2, adding half of 6 results in 5:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>***58</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now the 1 is subtracted from 9, doubled to make 16, and added with the odd 5 and half of the 8 to give 25:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(2)558</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>The 3 subtracted from 9 gives 6, doubling, adding the odd 5, plus half the neighbour and the carried 2 gives us 19:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>(1)9558</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally subtract 2 from half of 3 which gives -1, adding the carried 1 evens to 0:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>09558</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >1820 x 3 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 1820)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>4315 x 3 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 4315)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>26298 x 3 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 26298)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>49512 x 3 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 49512)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>85972 x 3 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 85972)}}>Check</button></div>
        
    </div>
        </div>
    )
}

function Rules4 ({rulesSelected, setRulesSelected}) {   
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 4) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 4</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 4)}}/>
    <div className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
    <ol style={{listStyleType: 'decimal'}} className='pl-5'>
            <li className='pl-5 pb-5'>Units digit: Subtract from 10, add 5 if odd</li>
            <li className='pl-5 pb-5'>Working right to left: Subtract from 9 and add half the right-hand neighbour and add 5 if odd</li>
            <li className='pl-5 pb-5'>Last step: Subtract 1 from half the left-most digit</li>
    </ol>
    </div>
    <div className='pt-10 text-center'>
        <p>Note that this "if odd" condition applies to the working number and <b>NOT</b> its right-hand neighbour</p>
        <p className='pt-5'>When halfing odd digits, always round down e.g. half of 3 is 1, half of 5 is 2, etc.</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 567 x 4</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        Subtracting 7 from 10 is 3, since 7 is odd, add 5 to give 8:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***8</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then we subtract 6 from 9 which gives 3.
            Adding the half the neighbour gives 6:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**68</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        Now we take 5 from 9 to give 4.
        Adding half the neighbour and the odd 5 makes 12:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>(1)268</div>

        <div className = 'col-span-3 border-r p-5'>
        Finally we take 1 from half of 5 and add the carried 1 which gives 2:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>2268</b></div>

    </div>
    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 3734 x 4:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First the 9 is subtracted from 10 which gives us 6:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****6</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then take the 3 away from 9 and add 5 and half of 4 to give 13:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(1)36</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now the 7 is subtracted from 9 and added to half of 3, the odd 5, and the carried 1
                resulting in 9:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**936</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>The 3 subtracted from 9 gives 6, plus the odd 5 and half of 7 gives 14:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>(1)4936</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally subtract 1 from half of 3 and add the carried 1:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>14,936</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >3241 x 4 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 3241)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>5760 x 4 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 5760)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>24413 x 4 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 24413)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>62934 x 4 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 62934)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>99245 x 4 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 99245)}}>Check</button></div>
        
    </div>
        </div>
    )



}

function Rules5 ({rulesSelected, setRulesSelected}) { 
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 5) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 5</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 5)}}/>
    <p className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
    Half the right-hand neighbour<br />
    plus 5 if the number is odd
    </p>
    <div className='pt-16 text-center'>
        <p>Note that this "if odd" condition applies to the left-hand number and <b>NOT</b> its right-hand neighbour</p>
        <p className='pt-5'>When halfing odd digits, always round down e.g. half of 3 is 1, half of 5 is 2, etc.</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 123 x 5</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        Since 3 has no right-hand neighbour, we simply write 5:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***5</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then the 3 is halved:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**15</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        Since 1 is odd, we add 5 to half of 2:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*615</div>

        <div className = 'col-span-3 border-r p-5'>
        Now there are no more numbers to the left and "half" of 1 is 0, we have:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>0615</b></div>

    </div>
    <p className = 'pt-16 text-center'>When multiplying by 5 there will never be any carrying involved.</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 6994 x 5:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First 4 is even and there is no neighbour so we can write 0 in the answer:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****0</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then the 9 is odd so we add 5 to half of 4 which is 7:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>***70</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Again 9 is odd so we add 5 to half of 9 which is 9:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**90</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>Now we half the 9:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*4970</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally half of the 6:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>34,970</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >2346 x 5 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 2346)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>5113 x 5 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 5113)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>29180 x 5 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 29180)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>43851 x 5 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 43851)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>85762 x 5 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 85762)}}>Check</button></div>
        
    </div>
        </div>
    )
}

function Rules6 ({rulesSelected, setRulesSelected}) {
   
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 6) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 6</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 6)}}/>
    <p className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
    Add half the right-hand neighbour to each digit <br />
    plus 5 if the number is odd
    </p>
    <div className='pt-16 text-center'>
        <p>Note that this "if odd" condition applies to the left-hand number and <b>NOT</b> its right-hand neighbour</p>
        <p className='pt-5'>When halfing odd digits, always round down e.g. half of 3 is 1, half of 5 is 2, etc.</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 123 x 6</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
            Since 3 has no right-hand neighbour, we simply add 5:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***8</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
            Then the 2 is added to "half" of 3:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**38</div>

        <div className = 'col-span-3 border-b border-r p-5'>
            The 1 is odd so we add five along with half of the neighbouring 2:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*738</div>

        <div className = 'col-span-3 border-r p-5'>
            Since there are no more numbers to the left and "half" of 1 is 0, we have:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>0838</b></div>

    </div>
    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 7468 x 6:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
                First the 8 is copied down directly as there is nothing to the right:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****8</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then the 6 is added to half the 8 which gives 10
            so the 0 is copied down the the 1 is carried across:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(1)08</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now we add the 4 to half of 6 plus the carried 1:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**808</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>Since the 7 is odd; we add 5 before adding half of the 4.
            This gives 14 so the 4 can be copied and the 1 carried across:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>(1)4808</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally "half" of the 7 is copied down plus the carried 1:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>44,808</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >5626 x 6 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 5626)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>7468 x 6 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 7468)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>9159 x 6 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 9159)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>63721 x 6 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 63721)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>23042 x 6 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 23042)}}>Check</button></div>
        
    </div>
        </div>
    )

}

function Rules7 ({rulesSelected, setRulesSelected}) {
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 7) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 7</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 7)}}/>
    <p className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
    Double the number and add half the right-hand neighbour<br />
    plus 5 if the number is odd
    </p>
    <div className='pt-16 text-center'>
        <p>Note that this "if odd" condition applies to the left-hand number and <b>NOT</b> its right-hand neighbour</p>
        <p className='pt-5'>When halfing odd digits, always round down e.g. half of 3 is 1, half of 5 is 2, etc.</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 121 x 7</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
            Since 1 has no right-hand neighbour, we simply double it and add 5:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***7</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
            Then the 2 is doubled and added to "half" of 1 which is 0 giving us 4 in the answer:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**47</div>

        <div className = 'col-span-3 border-b border-r p-5'>
            Now we double 1 and since it's odd so we add five along with half of the neighbouring 2:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*847</div>

        <div className = 'col-span-3 border-r p-5'>
            Since there are no more numbers to the left and "half" of 1 is 0, we have:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>0847</b></div>

    </div>
    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 9467 x 7:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
                First the 7 is doubled, since it's odd we also add five.
                This gives us 19 so we can write down the 9 and carry the 1:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>***(1)9</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then the 6 is doubled and added to "half" the 7 and the carried 1.
                This makes 16 so again we carry the one:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(1)69</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now we double the 4, add half the 6 plus the carried 1 to give 12.
                Again we carry another 1:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(1)269</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>Since the 9 is odd; we double it and add 5 before adding half of the 4 plus the carried 1.
                This gives 26 so the 6 can be copied and the 2 carried across:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>(2)6269</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally "half" of the 9 is copied down plus the carried 2:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>66,269</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >1534 x 7 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 1534)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>5376 x 7 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 5376)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>36823 x 7 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 36823)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>54679 x 7 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 54679)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>29885 x 7 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 29885)}}>Check</button></div>
        
    </div>
        </div>
    )


}

function Rules8 ({rulesSelected, setRulesSelected}) {   
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 8) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 8</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 8)}}/>
    <div className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
        <ol style={{listStyleType: 'decimal'}} className='pl-5'>
            <li className='pl-5 pb-5'>Units digit: Subtract from 10 and double</li>
            <li className='pl-5 pb-5'>Working right to left: Subtract from 9, double, and add the right-hand neighbour</li>
            <li className='pl-5 pb-5'>Last step: Subtract two from left-most digit of number</li>
        </ol>
    </div>
    <div className='pt-10 text-center'>
        <p>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 576 x 8</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        Subtracting 6 from 10 gives 4, doubled is 8:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>****8</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then we subtract 7 from 9 which gives 2.
        Doubling and adding the neighbour gives 10:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**(1)08</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        Now we take 5 from 9 to give 4.
        Doubling and adding the neighbour and carried 1 makes 16:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*(1)608</div>

        <div className = 'col-span-3 border-r p-5'>
        Finally we take 2 from 5 and add the carried 1
        </div>
        <div className = 'col-span-1 text-center p-5'><b>4,608</b></div>

    </div>
    <p className = 'pt-16 text-center'>The rules for multiplying by 8 are a bit harder to remember than the others
        but once mastered, the speed pay-off is worth it!</p>
    <p className = " p-10 pt-16 text-center font-bold">For example:  9718 x 8:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First the 8 is subtracted from 10 which gives us 2, doubled is 4:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****4</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then take the 1 away from 9, double, and add the 8 to make 24:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(2)44</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now the 7 is subtracted from 9, doubled, and added to the 1 and carried 2 which is 7:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**744</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>The 9 subtracted from 9 gives 0, so we just add the 7:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*7744</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally subtract 2 from the 9:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>77,744</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >9395 x 8 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 9395)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>7512 x 8 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 7512)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>87126 x 8 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 87126)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>55020 x 8 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 55020)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>15039 x 8 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 15039)}}>Check</button></div>
        
    </div>
        </div>
    )
}

function Rules9 ({rulesSelected, setRulesSelected}) {   
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 9) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 9</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 9)}}/>
    <div className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
        <ol style={{listStyleType: 'decimal'}} className='pl-5'>
            <li className='pl-5 pb-5'>Units digit: subtract from 10</li>
            <li className='pl-5 pb-5'>Working right to left; subtract from 9 and add the right-hand neighbour</li>
            <li className='pl-5 pb-5'>Last step; subtract one from left-most digit of number</li>
        </ol>
    </div>
    <div className='pt-10 text-center'>
        The rules for multiplying by 9 are a bit harder to remember than the others
        but worth learning nonetheless!
    </div>    

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 567 x 9:</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        Subtracting 7 from 10 gives 3:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>****3</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then we subtract 6 from 9 which gives 3.
            Adding the 7 gives 10:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**(1)03</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        Now we take 5 from 9 to give 4.
            Adding the neighbour and carried 1 makes 11:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*(1)103</div>

        <div className = 'col-span-3 border-r p-5'>
        Finally we take 1 from 5 and add the carried 1:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>5103</b></div>

    </div>
    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 9469 x 9:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First the 9 is subtracted from 10 which gives us 1:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****1</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then take the 6 away from 9 and add the 9 to make 12:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(1)21</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Now the 4 is subtracted from 9 and added to the 6 and carried 1 which is 12:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(1)221</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>The 9 subtracted from 9 gives 0, so we just add the 4 and carried 1:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*5221</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally subtract 1 from the 9:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>85,221</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >1755 x 9 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 1755)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>4437 x 9 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 4437)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>92321 x 9 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 92321)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>36301 x 9 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 36301)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>20180 x 9 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 20180)}}>Check</button></div>
        
    </div>
        </div>
    )

}

function Rules11 ({rulesSelected, setRulesSelected}) {    
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 11) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 11</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 11)}}/>
    <div className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-left bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
        <ol style={{listStyleType: 'decimal'}} className='pl-5'>
            <li className='pl-5 pb-5'>The units digit of the multiplicand is copied down to the units of the answer</li>
            <li className='pl-5 pb-5'>Working right to left; Each digit of the multiplicand is added to the digit on its right</li>
            <li className='pl-5 pb-5'>The leftmost digit of the multiplicand is the leftmost digit of the answer</li>
        </ol>
    </div>   

    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 123 x 11</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
        The 3 is copied down to the answer giving:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***3</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
        Then the 2 and 3 are added and applied to the answer:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**53</div>

        <div className = 'col-span-3 border-b border-r p-5'>
        The 1 and 2 are then added and applied:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*353</div>

        <div className = 'col-span-3 border-r p-5'>
        Finally the 1 is copied down to the answer giving:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>1353</b></div>

    </div>
    
    <p className = 'pt-16 text-center'>Another way to think about this rule is simply to add the digits right to left,
        starting with the 0 after the decimal place <br />i.e. 123 is considered as 123.0.</p>
    <p className = 'pt-5 text-center'>Each digit of the answer is written under the leftmost digit used in the addition.</p>

    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>

    <p className = " p-10 pt-16 text-center font-bold">For example: 3295 x 11:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
            First the 5 is copied down:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>****5</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then the 5 and 9 are added which makes 14.
                The 4 is copied down into the answer and the 1 is carried:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(1)45</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Next the 9 and 2 are added along with the carried 1 to make 12.
                Since this is also two digits the 2 is copied to the answer and the 1 is carried:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(1)245</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>Now the 3, 2, and carried 1 are all added together:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*6245</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally the 3 is transferred down to the answer:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>36,246</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >7105 x 11 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 7105)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>3183 x 11 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 3183)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>5948 x 11 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 5948)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>63397 x 11 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 63397)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>27822 x 11 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 27822)}}>Check</button></div>
        
    </div>
        </div>
    )
}

function Rules12 ({rulesSelected, setRulesSelected}) {
    
    const [checkAns, setCheckAns] = useState(Array(5).fill(null));
    let answers = Array(5).fill(0);

    function updateAns ({answers}, ans, index) {
       return (
        answers[index] = ans
       )
    }

    function validateAns({answers, checkAns, setCheckAns}, index, numerand) {
        let checkAnsCopy = checkAns.slice()
        {answers[index] == (numerand * 12) ? checkAnsCopy[index] = true : checkAnsCopy[index] = false}
        return (
            setCheckAns(checkAnsCopy)
        )     
    }

    return (
        <div className = 'p-5 text-white'>
           <h2 className = 'font-playfair font-bold text-2xl text-center pb-10'>Multiplication by 12</h2>
           <AiOutlineRight size={34} className='fixed top-6 left-3'
           onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 12)}}/>
    <p className = "border border-2 border-white text-[#0e0d15] rounded-lg p-5 font-playfair text-xl text-center bg-gradient-to-r from-[#00efaf] to-[#20b8b3]">
        Double each digit and add its neighbour on the right
    </p>
    <p className = "text-center pt-10 pb-5 font-bold font-lato">For example: 123 x 12</p>
    <div className = 'grid grid-cols-4 align-center border rounded-md'>    
        <div className = 'col-span-3 border-b border-r p-5'>
            The 3 is doubled and copied down to the answer giving:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>***6</div>
    
        <div className = 'col-span-3 border-b border-r p-5'>
            Then the 2 is doubled and added to the three:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>**76</div>

        <div className = 'col-span-3 border-b border-r p-5'>
            The 1 is doubled and added to the 2 to give:
        </div>
        <div className = 'col-span-1 text-center border-b p-5'>*476</div>

        <div className = 'col-span-3 border-r p-5'>
            Since 123 can be written 0123, the 0 is doubled and added to the one:
        </div>
        <div className = 'col-span-1 text-center p-5'><b>1476</b></div>

    </div>
    <p className = 'pt-16 text-center'>Just like in other methods; cases where the numbers add up to two digits result in the tens digit being carried to the next addition</p>
    <p className = " p-10 pt-16 text-center font-bold">For example: 1597 x 1:</p>
    <div className = 'grid grid-cols-3 align-center border rounded-md'>
            <div className = 'col-span-2 border-b border-r p-5'>
                First the 7 is doubled to make 14 - the 4 is tranferred to the answer
            while the 1 is carried:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>***(1)4</div>

            <div className = 'col-span-2 border-b border-r p-5'>Then the 9 is doubled and added to the 7 and carried 1 which gives 26.
            The 6 is copied down into the answer and the 2 is carried:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>**(2)64</div>
        
            <div className = 'col-span-2 border-b border-r p-5'>Next the 5 is doubled and added to the 9 and carried 2 to give 21.
            Since this is also two digits the 1 is copied to the answer and the 2 is carried:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*(2)164</div>
        

            <div className = 'col-span-2 border-b border-r p-5'>Now the 1 is doubled and added to the 5 and carried 2:
            </div>
            <div className = 'col-span-1 text-center border-b p-5'>*9164</div>
      
        
            <div className = 'col-span-2 border-r p-5'>Finally the 1 is copied down:
            </div>
            <div className = 'col-span-1 text-center p-5'><b>19,164</b></div>
        
    </div>

    <p className = 'pt-16 pb-10 text-lg font-lilita text-center'>Try some practice questions yourself:</p>
    <div className = 'grid grid-cols-5 gap-y-6 pb-10 p-5 text-black font-lato border-white border-2 rounded-md bg-gradient-to-r from-[#00efaf] to-[#20b8b3]'>
        
            <div className = 'col-span-5 text-center pr-5' >4354 x 12 = </div>
            <input className = {`col-span-4 pl-5 text-center ${checkAns[0] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[0] == false && 'bg-red-500'}`} 
                type = "number"
                onChange = {e => updateAns({answers}, e.target.value, 0)}></input>
            <div className = 'ml-2 -mr-2 text-center border rounded-md border-[#7d4acb]'>
                <button                 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 0, 4354)}}>Check</button>
            </div>

           <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>

            <div className = 'col-span-5 text-center pr-5'>3638 x 12 = </div>            
            <input className = {`col-span-4 pl-5 text-center ${checkAns[1] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[1] == false && 'bg-red-500'}`}
                 type = "number"
                 onChange = {e => updateAns({answers}, e.target.value, 1)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button 
                onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 1, 3638)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>64654 x 12 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[2] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[2] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 2)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 2, 64654)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>27549 x 12 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[3] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[3] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 3)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 3, 27549)}}>Check</button></div>

            <span className = 'col-span-5 w-full border border-b-[1px] border-t-0 border-[#7d4acb]'></span>
        
            <div className = 'col-span-5 text-center pr-5'>72893 x 12 = </div>
            <input className = {`col-span-4 pl-8 text-center ${checkAns[4] == true ? 'bg-[#aef359]' : 'bg-white'} ${checkAns[4] == false && 'bg-red-500'}`}
             type = "number"
             onChange = {e => updateAns({answers}, e.target.value, 4)}></input>
            <div className = 'ml-2 pl-3 -mr-2 border rounded-md border-[#7d4acb]'>
                <button onClick={()=> {validateAns({answers, checkAns, setCheckAns}, 4, 72893)}}>Check</button></div>
        
    </div>
        </div>
    )
}


function Basic ({sectionIndex, setSection, rulesSelected, setRulesSelected}) {

    return (
        <div>
            <div className = 'grid gap-4 p-4 pb-0 lg:grid-cols-3 pr-8'>
            <div className = "col-span-3 grid grid-cols-3">
            <div className = 'col-span-1 p-4 mt-1' onClick = {() => {toggleSection({sectionIndex, setSection, rulesSelected, setRulesSelected}, 0)}}> 
                <IoArrowBack size = {24} color = "white"/>
            </div>
            <div className = 'col-span-2 lg:w-[30vw] w-[60vw] pl-24 p-4 pl-0 lg:pl-4 -ml-16 lg:ml-16 text-left font-playfair font-semibold text-lg text-white'>
                <p>BASIC MULTIPLICATION METHOD</p>
                <span className = 'border-b-[2px] border-[#9775dd] mt-4 mb-f ml-24 lg:ml-5 mb-0 w-[18vw] inline-block'></span>
            </div>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 12)}}>
                <p className = 'moduleTitle'>
                    Multiplication by 12
                </p>
                <p className = 'moduleText'>
                    Multiplication by 12 has only one rule: Double each number and add it's neighbour. Click for more!
                </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 6)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 6
            </p>
            <p className = 'moduleText'>
            Multiplication by six has one rule: Add half the neighbour to each number (+5 if the number is odd). Click for more!
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 7)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 7
            </p>
            <p className = 'moduleText'>
            Multiplication by seven is similar to the rule for 12 & 6: Double each number and add half the neighbour(+5 if the number is odd). Click for more!
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 5)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 5
            </p>
            <p className = 'moduleText'>
            The rule for 5 is similar to that of 7: Half the neighbour(+5 if the number is odd). Click for more!
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 11)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 11
            </p>
            <p className = 'moduleText'>
            Learn the basic method of multiplication by 11 in three steps
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 9)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 9
            </p>
            <p className = 'moduleText'>
            Click to learn the rules for multiplication by 9 - Three step process.
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 8)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 8
            </p>
            <p className = 'moduleText'>
            Similar to the rule for multiplication by 9 - also contains three steps
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 4)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 4
            </p>
            <p className = 'moduleText'>
            Very similar to the rule for multiplication by 9!
            </p>
            </div>
            <div className = 'moduleBasic' onClick = {() => {toggleRules({rulesSelected, setRulesSelected}, 3)}}>
            <p className = 'moduleTitle'>
                    Multiplication by 3
            </p>
            <p className = 'moduleText'>
            The rules for multiplication by 3 are similar to those for multiplication by 8. Click for more!</p>
            </div>
            </div>
        </div>

    )
}

function LearnPage ({sectionIndex, setSection, rulesSelected, setRulesSelected}) {    

    return (
        <div>            
            <div className = 'h-fit w-full pt-10 pr-4 pb-5'>
            <h3 className = "p-4 text-center font-playfair font-semibold text-lg text-white">Multiplication</h3>
            <div className = 'moduleGrid-learn'>
                <div className = "moduleLearn" onClick = {() => {toggleSection({sectionIndex, setSection, rulesSelected, setRulesSelected}, 1)}}>
                    <p className = "moduleTitle">Basic Method</p>
                    <p className = "moduleText">Learn the basic method for mulitplication starting with digits 3 to 11 then how to apply this method to larger multiplicands.</p>
                </div>
                 <div className = "moduleLearn">
                    <p className = "moduleTitle">Direct Method</p>
                    <p className = "moduleText">Faster method of multiplication than the basic method. This method avoids intermediate steps. </p>
                </div>
                <div className = "moduleLearn">
                <p className = "moduleTitle">Two Finger Method</p>
                <p className = "moduleText">Improvement to the direct method which helps particularly when dealing with larger digits.</p>
                </div>
            </div>                
                <span className = 'border-b-[2px] border-[#9775dd] mt-4 ml-[30vw] mb-0 w-[40vw] inline-block'></span>
                
            <h3 className = "p-4 text-center font-playfair font-semibold text-lg text-white">Other</h3>
            
            <div className = 'moduleGrid-learn'>
                <div className = "moduleLearn">
                    <p className = "moduleTitle">Division</p>
                    <p className = "moduleText">Two methods for rapid division. The simple method is easier to memorise, while the fast method is easier to carry out.</p>
                </div>
                <div className = "moduleLearn">
                    <p className = "moduleTitle">Squares</p>
                    <p className = "moduleText">Method for squaring numbers of any length. Different to methods given for standard multiplication.</p>
                </div>
                <div className = "moduleLearn">
                    <p className = "moduleTitle">Square Roots</p>
                    <p className = "moduleText">Can be used to find the square root of any size of number. Recommended to be learned after mastering squaring.</p>
                </div>
            </div>
            </div>
            <span className = 'border-b-[2px] border-[#9775dd] ml-[30vw] mb-0 w-[40vw] inline-block'></span>
            <div className = 'cols-3 gap-4 p-4 pt-7 pr-8'>
                <div className = "moduleLearn min-h-fit">
                    <p className = "moduleTitle">Addition / Checking</p>
                    <p className = "moduleText">Learn the method for addition and quickly checking your answers.</p>
                </div>
            </div>
            </div>
     )
}

function Info () {
    return (
        <div className = 'flex w-[100vw] lg:flex-row flex-col gap-4 lg:h-[20vh] h-[30vh] bg-gradient-to-r from-[#20b8b3] to-[#30bd92] pr-5'>
            <p className = 'lg:flex-2 flex-1 lg:text-xl text-lg font-playfair p-10 text-center'>What is the Trachtenberg Method?</p>
            <div className = 'flex-1 lg:m-3 lg:mr-24 -mt-5 p-5 text-center lg:text-left lg:text-base text-sm'>
            <p className = 'italic font-bold'>The Trachtenberg method is a simple way of quickly calculating multiplication, division, squares, and square roots.</p>
            <p className = 'italic'>With practice, calculations can be done mentally in less time than it takes to type it into a calculator!</p>
            </div>
            
        </div>
    )
}

export default function Learn () { 
    const [sectionIndex, setSection] = useState(0);
    const [rulesSelected, setRulesSelected] = useState(0);

    return (
        <div>
          <Header title = "Learn Trachtenberg"/>
            <Info />
            <h1 className = 'font-lilita w-[100vw] text-center text-white text-4xl lg:pb-10 pb-0 lg:-ml-2 pt-8'>THE RULES</h1>
            <div className = {`${sectionIndex == 0 ? 'transition-all duration-700 translate-x-0 flex flex-cols-2' : 'transition-all duration-700 -translate-x-[100vw] flex flex-cols-2'}`}>

                <div className = 'col-span-1 w-[100vw] pb-10'>
                    <LearnPage sectionIndex = {sectionIndex} setSection = {setSection} rulesSelected = {rulesSelected} setRulesSelected = {setRulesSelected}/>
                </div>
                <div className = {`${rulesSelected == 0 ? 'transition-all duration-700 -translate-x-0 col-span-1 w-[100vw]' : 'transition-all duration-700 translate-x-0 col-span-1 w-[70vw]' }`}>
                    <Basic sectionIndex = {sectionIndex} setSection = {setSection} rulesSelected = {rulesSelected} setRulesSelected={setRulesSelected} />
                </div>
            </div>
            <div className = {`${rulesSelected == 0 ? 'transition-all duration-700 translate-x-[30vw] w-[100vw] lg:w-[30vw]' : 'transition-all duration-700 translate-x-0 fixed h-[90vh] w-[100vw] lg:w-[30vw] bg-gradient-to-r from-[#2f1c6e] to-[#7d4acb] overflow-scroll z-50 right-0 bottom-0 top-20'}`}>
                    {rulesSelected == 3 && <Rules3 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 4 && <Rules4 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 5 && <Rules5 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 6 && <Rules6 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 7 && <Rules7 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 8 && <Rules8 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 9 && <Rules9 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 11 && <Rules11 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                    {rulesSelected == 12 && <Rules12 rulesSelected={rulesSelected} setRulesSelected={setRulesSelected}/>}
                </div>
            
            </div>
    )

}