/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="card h-100">
                        {/* <div className="flex-row-reverse p-0 card-header d-flex">
                            <div className="dropdown">
                                <a className="btn option-btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                   <i className="fa-solid fa-ellipsis"></i> Font Awesome fontawesome.com
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                    <li> <small><a className="dropdown-item" href="https://www.tcard.biz/admin/vcards/2171/enquiry">Enquiries</a></small> </li>
                                    <li> <small><a className="dropdown-item" href="https://www.tcard.biz/admin/vcard/2171/analytics">Analytic</a></small> </li>
                                    <li>
                                        <small><a href="https://www.tcard.biz/tc2171zJh" id="vcardUrl2171" target="_blank" className="text-decoration-none fs-6 visually-hidden">https://www.tcard.biz/tc2171zJh</a>
                                        <a className="dropdown-item btn copy-clipboard" data-id="2171" title="copy">Copy Link</a> </small>
                                    </li>
                                    <li>
                                        <small><a href="javascript:void(0)" data-id="2171" title="Delete" className="dropdown-item vcard_delete-btn">Remove</a></small>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="pt-0 pb-0 mt-0 text-center card-body">

                            <div className="profile-url">
                                <img className="rounded-circle" src="/demo.jpg" alt="Card image cap" width="90" height="90" />
                            </div>

                            <div className="inf-tcard">
                                <span><h3>Md. Hasibuzzaman</h3></span>
                                <span></span><br/>
                                <span className="text-white badge bg-secondary">Business Card</span>
                            </div>

                            <div className="flex-row mt-2 mb-2 d-flex justify-content-center">
                                <div className="px-3">
                                    <label className="form-check form-switch d-flex justify-content-center">
                                        {/* <input name="is_active" data-id="2171" className="form-check-input vcardStatus" type="checkbox" value="1" checked=""> */}
                                    </label>
                                                                            <small>Status</small>
                                        
                                    
                                </div>

                                <div className="px-3">
                                    <label className="form-check form-switch d-flex justify-content-center">
                                        {/* <input name="is_active" data-id="2171" data-url_alias="tc2171zJh" className="form-check-input isDefault" type="checkbox" value="1" checked=""> */}
                                    </label>
                                                                            <small>Default</small>
                                                                    </div>
                            </div>

                            <div className="flex-row mt-1 mb-3 d-flex justify-content-center">
                                <div className="">
                                    <a className="p-0 btn btn-primary tcard-action-btn" target="_blank" href="https://www.tcard.biz/tc2171zJh" role="button">
                                        
                                        
                                    </a>
                                </div>
                                <div className="px-2">
                                    <a className="p-0 btn btn-primary tcard-action-btn" href="https://www.tcard.biz/admin/vcards/2171/edit" role="button" title="Edit">
                                      
                                    </a>
                                </div>
                                <div className="px-2">
                                    <a className="p-0 btn btn-primary tcard-action-btn" href="https://www.tcard.biz/admin/qr-profile/tc2171zJh" role="button">
                                      
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
  );
};
export default ContactCard;
