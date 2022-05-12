import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Course from './Course';
import CourseApi from '../../apis/courseApi';
import image1 from '../../images/headerTheory.png';
import styles from './styles/Theory.module.css';


function Theory(props) {

    const [monHocs, setMonHocs] = useState([])

    useEffect(() =>{
        const data = async () => {
            try {
                const response = await CourseApi.getAll();
                setMonHocs(response.data);
            } catch (error) {
                console.log("Fetch data error: ", error);
            }
        }
        data();


    },[])

    return (
        <div>
            <div className={styles.theory}>
                <div className={styles.theoryHeader} src={image1}>
                    <div className={styles.theoryHeaderLeft}>
                        <h1>Tìm hiểu lý thuyết cùng CODE SAMPLE</h1>
                        <div className={styles.findTheory}>
                            <input type='text' className={styles.nameTheory} placeholder='Nhập nội dung tìm kiếm' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <img src={image1} alt='imageHeaderTheory' />
                </div>

                <div className={styles.container}>

                    <div className={styles.kienthuccoso}>
                        <h1>Kiến thức cơ sở</h1>
                        <Course  data={monHocs} />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Theory;