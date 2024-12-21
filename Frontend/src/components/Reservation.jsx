import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Reservation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios.post(
                "http://localhost:8000/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");

            navigate("/success");
        } catch (err) {
            toast.error(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="Reservation Banner" />
                </div>

                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    aria-label='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    aria-label='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder='Date'
                                    aria-label='Date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    placeholder='Time'
                                    aria-label='Time'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    aria-label='Email'
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input 
                                    type="tel"
                                    placeholder='Phone'
                                    aria-label='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'RESERVING...' : 'RESERVE NOW'}{" "}
                                <span>
                                    <HiOutlineArrowNarrowRight/>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
