import React from 'react'

const UserDetail = () => {
    return (
        <div className="container mb-30">
            <div className="py-2">
                <h5>Thông tin chi tiết tài khoản</h5>
            </div>
            <div className="row pt-3" style={{ backgroundColor: '#d9d9d9', borderRadius: '5px', boxSizing: 'border-box', marginLeft: '5px', marginRight: '5px' }}>
                <div className="col-12">
                    <p className="font-weight-bold" style={{ color: 'black' }}>
                        Họ và tên : <span style={{ color: 'black' }}>{localStorage.getItem('name') ? localStorage.getItem('name') : null}</span>
                    </p>
                </div>
                <div className="col-12">
                    <p className="font-weight-bold" style={{ color: 'black' }}>Số điện thoại : </p>
                </div>
                <div className="col-12">
                    <p className="font-weight-bold" style={{ color: 'black' }}>
                        Email : <span style={{ color: 'black' }}>{localStorage.getItem('email')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
