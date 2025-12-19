import { Input, TextArea, Chechbox } from "./";
import Button from "../Button";
import type { FormEvent } from "react";


function getRandomBoolean(): boolean {
    return Math.random() < 0.5;
}

function openModal(): void {

    const msgfailtitle: string = "Oops! Something went wrong.";
    const msgfail: string = "We couldn't send your message. Please try again or check your connection.";
    const btnfailtext: string = "Try Again";

    const msgsuccesstitle: string = "Message Received!";
    const msgsuccess: string = "Thanks for reaching out — we'll get back to you as soon as possible.";
    const btnsuccesstext: string = "Back to Home";

    const imgmsgfail = document.getElementById('imgmsgfail') as HTMLImageElement | null;
    const imgmsgsuccess = document.getElementById('imgmsgsuccess') as HTMLImageElement | null;

    const msgtitle = document.getElementById('msgtitle') as HTMLElement | null;
    const msgcontent = document.getElementById('msgcontent') as HTMLElement | null;
    const btnmsgtext = document.getElementById('btnmsgaction') as HTMLElement | null;

    if (getRandomBoolean()) {
        if (msgtitle) msgtitle.innerText = msgsuccesstitle;
        if (msgcontent) msgcontent.innerText = msgsuccess;
        if (btnmsgtext) btnmsgtext.innerText = btnsuccesstext;

        if (imgmsgsuccess) imgmsgsuccess.classList.remove('hidden');
        if (imgmsgfail) imgmsgfail.classList.add('hidden');
    } else {
        if (msgtitle) msgtitle.innerText = msgfailtitle
        if (msgcontent) msgcontent.innerText = msgfail
        if (btnmsgtext) btnmsgtext.innerText = btnfailtext

        if (imgmsgsuccess) imgmsgsuccess.classList.add('hidden');
        if (imgmsgfail) imgmsgfail.classList.remove('hidden');
    }

    const modal = document.getElementById("dialogModal");
    if (modal) {
        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
    }
}

type CheckBoxType = {
    id: string;
    name: string;
    value: string;
    label: string;
}

const chechboxes: CheckBoxType[] = [
    { id: "web-development", name: "services", value: "Web Development", label: "Web Development" },
    { id: "mobile-app-development", name: "services", value: "Mobile App Development", label: "Mobile App Development" },
    { id: "ui-ux-design", name: "services", value: "UI/UX Design", label: "UI/UX Design" },
    { id: "cloud-solutions", name: "services", value: "Cloud Solutions", label: "Cloud Solutions" },
    { id: "software-development", name: "services", value: "Software Development", label: "Software Development" },
    { id: "other", name: "services", value: "Other", label: "Other" }
];

const FormContact = () => {

    const submitAction = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        openModal();
    } 

    return (
        <form id="messageform" onSubmit={submitAction}>
            <div className="mb-5">
                <Input id="name" name="name" type="text" label="Name" placeholder="Enter your name" />
            </div>
            <div className="mb-5">
                <Input id="email" name="email" type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="mb-5">
                <TextArea id="message" name="message" label="Message" placeholder="Enter your message" />
            </div>

            <div className="grid grid-col md:grid-flow-col md:grid-rows-3 overflow-y-auto mb-5">
                {chechboxes.map((chk) => (
                    <div key={chk.id} className="flex items-center my-2">
                        <Chechbox id={chk.id} name={chk.name} value={chk.value} label={chk.label} />
                    </div>
                ))}
            </div>

            <div className="flex rounded-3xl bg-gradient-to-br from-red-200 to-orange-600 p-0.5">
                <Button id="SendMessage" type="submit" label="Send" />
            </div>
        </form>
    );
};

export default FormContact