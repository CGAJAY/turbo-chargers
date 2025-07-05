"use client";
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer
                className="bg-[#122358] text-white py-6  px-4 sm:px-6 lg:px-8
           border-t-2  flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h4 className="font-bold">About info</h4>
                    <p className="">We are turbocharger specialists</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h4 className="font-bold">Follow us on</h4>
                    <p className="text-bold">
                        Email:{" "}
                        <a
                            href="mailto:info@turboshop.com"
                            className="text-white hover:underline">
                            info@turboshop.com
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export { Footer };
