import React from 'react'
import './Reviews.css'
import Rate from 'rc-rate'
import ReviewsRep from '../ReviewsRep/ReviewsRep'

const Reviews = () => {
    return(
        <ul className='Reviews_List'>
            <li className='Reviews_List_Item'>
                        <div className='Reviews_List_Item_Container'>
                            <div className='Reviews_List_Item_Wrapper'>
                                <div className='Reviews_List_Item_Avatar'>
                                    <img src='https://cutt.ly/vtUUUOw' alt='Avatar' className='Reviews_List_Item_AvatarIMG'></img>
                                </div>

                                <div className='Reviews_List_Item_Data'>
                                    <span className='Reviews_List_Item_Description_Date'>01/12/20</span>
                                    
                                        <h4 className='Reviews_List_Item_Title'>Maximilian Berger</h4>
                                            <Rate className='Reviews_List_Item_Data_Rating'
                                                disabled
                                                defaultValue={3}
                                                character={<i class="fas fa-star"></i>}
                                            />
                                    <span className='Reviews_List_Item_Description-Mobile'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                                </div>
                            </div>
                                <span className='Reviews_List_Item_Description-Desktop'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                        </div>
                        <div className='Reviews_List_Item_Actions'>
                            <span className='Reviews_List_Item_Actions_Date'>01/12/20</span>
                                <ReviewsRep />
                        </div>
                    </li>

                    <li className='Reviews_List_Item'>
                        <div className='Reviews_List_Item_Container'>
                            <div className='Reviews_List_Item_Wrapper'>
                                <div className='Reviews_List_Item_Avatar'>
                                    <img src='https://cutt.ly/vtUUUOw' alt='Avatar' className='Reviews_List_Item_AvatarIMG'></img>
                                </div>

                                <div className='Reviews_List_Item_Data'>
                                    <span className='Reviews_List_Item_Description_Date'>01/12/20</span>
                                    
                                        <h4 className='Reviews_List_Item_Title'>Maximilian Berger</h4>
                                            <Rate className='Reviews_List_Item_Data_Rating'
                                                disabled
                                                defaultValue={3}
                                                character={<i class="fas fa-star"></i>}
                                            />
                                    <span className='Reviews_List_Item_Description-Mobile'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                                </div>
                            </div>
                                <span className='Reviews_List_Item_Description-Desktop'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                        </div>
                        <div className='Reviews_List_Item_Actions'>
                            <span className='Reviews_List_Item_Actions_Date'>01/12/20</span>
                                <ReviewsRep />
                        </div>
                    </li>

                    <li className='Reviews_List_Item'>
                        <div className='Reviews_List_Item_Container'>
                            <div className='Reviews_List_Item_Wrapper'>
                                <div className='Reviews_List_Item_Avatar'>
                                    <img src='https://cutt.ly/vtUUUOw' alt='Avatar' className='Reviews_List_Item_AvatarIMG'></img>
                                </div>

                                <div className='Reviews_List_Item_Data'>
                                    <span className='Reviews_List_Item_Description_Date'>01/12/20</span>
                                    
                                        <h4 className='Reviews_List_Item_Title'>Maximilian Berger</h4>
                                            <Rate className='Reviews_List_Item_Data_Rating'
                                                disabled
                                                defaultValue={3}
                                                character={<i class="fas fa-star"></i>}
                                            />
                                    <span className='Reviews_List_Item_Description-Mobile'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                                </div>
                            </div>
                                <span className='Reviews_List_Item_Description-Desktop'>Ignorant branched humanity led now marianne too strongly entrance. Rose to shew bore no ye of paid rent form. Old design are dinner better </span>
                        </div>
                        <div className='Reviews_List_Item_Actions'>
                            <span className='Reviews_List_Item_Actions_Date'>01/12/20</span>
                                <ReviewsRep />
                        </div>
                    </li>
    </ul>
    )
}

export default Reviews