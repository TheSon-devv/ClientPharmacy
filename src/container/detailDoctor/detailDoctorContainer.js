import React from 'react'
import Footer from '../../component/Footer'
import HeaderAreaFix from '../../component/Header/HeaderAreaFix'
import DetailDoctor from '../../component/DetailDoctor'

const detailDoctorContainer = () => {
    return (
        <div>
            <HeaderAreaFix />
            <DetailDoctor />
            <Footer />
        </div>
    )
}

export default detailDoctorContainer
