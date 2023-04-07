import React, { useEffect, useState } from "react";
import Image from "next/image";
import TimerSlice from "@/components/TimerSlice";
import Center from "@/components/Center";

function Countdown() {
    const [delta, setDelta] = useState({
        days: 10,
        hours: 10,
        minutes: 10,
        seconds: 10,
    });

    var countDownDate = new Date("Apr 20, 2023").getTime();

    useEffect(() => {
        setInterval(() => {
            var now = new Date().getTime();
            var timeleft = countDownDate - now;

            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor(
                (timeleft % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            setDelta({
                days,
                hours,
                minutes,
                seconds,
            });
        }, 1000);
    }, [setDelta]);

    return (
        <section
            id="sect2"
            className="countdown p-8 bg-[#010027] relative overflow-hidden"
        >
            <div className="absolute lg:w-[380px] w-60 h-full top-[20%] left-[-5%]">
                <Image
                    src="/assets/images/countdown-left_leaf.png"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="absolute lg:w-[410px] w-60 h-full top-[-15%] right-[-6%]">
                <Image
                    fill
                    src="/assets/images/countdown-right_leaf.png"
                    className="object-contain"
                />
            </div>

            <Center>
                <div className="flex items-center gap-4 text-white my-28 z-20">
                    <TimerSlice number={delta.days} unit="days" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.hours} unit="hours" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.minutes} unit="mins" />
                    <span className="text-5xl font-bold">:</span>
                    <TimerSlice number={delta.seconds} unit="seconds" />
                </div>
            </Center>
        </section>
    );
}

export default Countdown;
