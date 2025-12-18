import { Input, TextArea, Chechbox } from "./";
import Button from "../Button";

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
    return (
        <form id="messageform">
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
                    <div className="flex items-center my-2">
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