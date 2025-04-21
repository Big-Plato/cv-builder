import { useState } from "react";

export default function Menu({ title }) {
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
                        <h3>Conteudo</h3>
                        <p>Este modal funciona</p>
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
            )}
            </div>

        </>
    )
}