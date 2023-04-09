import React from "react";
import Sectionboder from "../public/register/line.svg"; // TODO: not working, fix this
import { useRouter } from "next/router";
import eventRegisterData from "../data/register.json";
// TODO: Luma its opening a new window like google sign in. Need to be as its on static site
// TODO: fix reload issue, uncomment coordinators map

function Register() {
  const router = useRouter();
  const { eventName } = router.query
  console.log(router.query)
  console.log(eventRegisterData)

    function redirectToEvent() {
        window.open(
            "https://lu.ma/event/evt-4LEqHzIVQizhJso",
            "Event Page",
            "height=500,width=700"
          );
    }

    return (
        <div className="text-white">
        <img className="absolute top-0 left-0 w-10 h-10 md:w-24 md:h-24" src="https://via.placeholder.com/150" alt="Upper Left Image"/>
        <img className="absolute bottom-0 right-0 w-10 h-10 md:w-24 md:h-24" src="https://via.placeholder.com/150" alt="Bottom Right Image"/>
    
        <div className="fixed top-0 right-0 p-4">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M21 13H3V11H21V13ZM21 7H3V9H21V7ZM21 17H3V19H21V17Z" />
          </svg>
        </div>    
    
        <header className="flex items-center justify-center px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold ">{eventRegisterData[eventName].event_name}</h1>
            <h2 className="text-base title-font">{eventRegisterData[eventName].event_type}</h2>
          </div>
        </header> 
    
        <div className="flex justify-center">
          <img src={Sectionboder} alt="Event Image"/>
        </div>
            
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="sm:w-full px-4 py-2 text-center">
            <h2 className="text-lg font-bold">WHAT'S IT?</h2>
            <p className="mt-2">{eventRegisterData[eventName].event_quote}</p>
          </div>
          <div className="sm:w-full px-4 py-2 text-center">
            <h2 className="text-lg font-bold">PRIZES</h2>
            <ul className="mt-2 list-inside">
              <li className="prize-1">{eventRegisterData[eventName].prizes[0]}</li>
              <li className="prize-2">{eventRegisterData[eventName].prizes[1]}</li>
            </ul>
          </div>
          <div className="sm:w-full px-4 py-2 text-center">
            <h2 className="text-lg font-bold">DATE & TIME</h2>
            <p className="mt-2">{eventRegisterData[eventName].date}</p>
            <p className="mt-2">{eventRegisterData[eventName].time}</p>
          </div>
        </div>    
                
        <main className="mx-auto py-8 pl-8 pr-8">
          <div className="flex justify-center items-center mb-8">
            <button className="px-6 py-2 bg-yellow-400 rounded-lg mr-4 focus:outline-none" onClick={redirectToEvent}>REGISTER</button>
            <button className="px-6 py-2 bg-yellow-400 rounded-lg focus:outline-none">READ RULES</button>
          </div>
    
          <div className="flex justify-center">
            <img src={Sectionboder} alt="Event Image"/>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">RULES</h3>            
            <ul className="ml-8 title-font">
                {
                eventRegisterData[eventName].rules.map((rule) => (
                    <li>{rule}</li>
                ))
                }
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={Sectionboder} alt="Event Image"/>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">COORDINATORS</h3>
            <ul className="ml-8 title-font">
            {
            eventRegisterData[eventName].coordinators.map((coordinator) => (
                <li>{coordinator}</li>
            ))
            }
            </ul>
          </div>
        </main>
          
      </div>
    
    );
}

export default Register;
