import { Icon } from 'antd'
import React from 'react';
import './downloadForm.css';

const DownloadForm = () => {
    return  (
        <div className="downloadForm">
            <div className="downloadTitle">
                <h1>DOWNLOAD</h1>
            </div>
          <div className="downloading">
            <div className="download1"><a target="blank" href="https://drive.google.com/open?id=1FFKMF5GDjPPfQOriBpIo5CADb4AZ-3le"><Icon type="download" /> Profile</a></div>
            <div className="download2"><a target="blank" href="https://drive.google.com/open?id=1xjwOgylniriEJlANTIjl1eCRogGb_XfH"><Icon type="download" /> Reference</a></div>
          </div>
        </div>
    )
}

export default DownloadForm;