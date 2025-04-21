import { useState } from "react";
import Field from "./Field.jsx"

export default function Menu({ title, textOne, textTwo }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const buttonImg = isOpen ? 'src/assets/top-arrow.svg' : 'src/assets/bottom.svg';

    const idImg = `${crypto.randomUUID()}`;

    return (
        <>
            <div className="title-menu">
                <h3>{title}</h3>
                <button 
                    onClick={() => {
                        setIsOpen(!isOpen)
                        setIsModalOpen(!isModalOpen)
                    }
                    }
                    className="button-menu"
                >
                <img 
                    src={buttonImg} 
                    id={idImg}
                    width="25px" 
                />

                </button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <Field type="text" text={textOne} />
                        <Field type="text" text={textTwo} />
                        <Field type="date" text="Start Date" width="50px"/>
                        <Field type="date" text="End Date" />
                        <div className="button-menu-div">
                            <button className="submit-button" type="submit">
                            Create
                            </button>
                            <button 
                            onClick={() => 
                                {
                                    setIsOpen(false)
                                    setIsModalOpen(false)
                                }
                            }
                            className="submit-button"
                            >
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>

        </>
    )
}