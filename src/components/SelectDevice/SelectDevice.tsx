import React, { Component } from 'react';
import './SelectDevice.scss';
import { Device } from '../../redux/reducers/deviceReducer';
import { AddDeviceAction } from '../../redux/actions/deviceActions/deviceActions';
import Button from '@material-ui/core/Button';

interface Props {
    handleToggleDialog: () => void
    handleContent: (count: number) => void
}

class SelectDevice extends Component<Props> {

    render() {
        return (
            <div className='select_device_dialog__inner'>
                <h5>Add Device</h5>
                <h6>Select a device type.</h6>
                <div className='select-device'>
                    <div className='select-device__item' onClick={() => this.props.handleContent(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 236 236">
                            <path fill="#262626" d="M224.2,20 C230.716504,20 236,25.2834962 236,31.8 L236,31.8 L236,189.133333 C236,195.649837 230.716504,200.933333 224.2,200.933333 L224.2,200.933333 L212.4,200.933333 L212.4,212.733333 C212.4,214.905501 210.638835,216.666667 208.466667,216.666667 L208.466667,216.666667 L184.866667,216.666667 C182.694499,216.666667 180.933333,214.905501 180.933333,212.733333 L180.933333,212.733333 L180.933333,200.933333 L55.0666667,200.933333 L55.0666667,212.733333 C55.0666667,214.905501 53.3055014,216.666667 51.1333333,216.666667 L51.1333333,216.666667 L27.5333333,216.666667 C25.3611652,216.666667 23.6,214.905501 23.6,212.733333 L23.6,212.733333 L23.6,200.933333 L11.8,200.933333 C5.28349622,200.933333 0,195.649837 0,189.133333 L0,189.133333 L0,31.8 C0,25.2834962 5.28349622,20 11.8,20 L11.8,20 Z M47.2,200.933333 L31.4666667,200.933333 L31.4666667,208.8 L47.2,208.8 L47.2,200.933333 Z M204.533333,200.933333 L188.8,200.933333 L188.8,208.8 L204.533333,208.8 L204.533333,200.933333 Z M224.2,27.8666667 L11.8,27.8666667 C9.62783191,27.8666667 7.86666667,29.6278319 7.86666667,31.8 L7.86666667,31.8 L7.86666667,189.133333 C7.86666667,191.305501 9.62783191,193.066667 11.8,193.066667 L11.8,193.066667 L224.2,193.066667 C226.372168,193.066667 228.133333,191.305501 228.133333,189.133333 L228.133333,189.133333 L228.133333,31.8 C228.133333,29.6278319 226.372168,27.8666667 224.2,27.8666667 L224.2,27.8666667 Z M177,43.6 C183.516504,43.6 188.8,48.8834962 188.8,55.4 L188.8,55.4 L188.8,165.533333 C188.8,172.049837 183.516504,177.333333 177,177.333333 L177,177.333333 L35.4,177.333333 C28.8834962,177.333333 23.6,172.049837 23.6,165.533333 L23.6,165.533333 L23.6,55.4 C23.6,48.8834962 28.8834962,43.6 35.4,43.6 L35.4,43.6 Z M177,51.4666667 L35.4,51.4666667 C33.2278319,51.4666667 31.4666667,53.2278319 31.4666667,55.4 L31.4666667,55.4 L31.4666667,165.533333 C31.4666667,167.705501 33.2278319,169.466667 35.4,169.466667 L35.4,169.466667 L177,169.466667 C179.172168,169.466667 180.933333,167.705501 180.933333,165.533333 L180.933333,165.533333 L180.933333,55.4 C180.933333,53.2278319 179.172168,51.4666667 177,51.4666667 L177,51.4666667 Z M208.466667,130.133333 C214.98317,130.133333 220.266667,135.41683 220.266667,141.933333 C220.266667,148.449837 214.98317,153.733333 208.466667,153.733333 C201.950163,153.733333 196.666667,148.449837 196.666667,141.933333 C196.666667,135.41683 201.950163,130.133333 208.466667,130.133333 Z M208.466667,138 C206.294499,138 204.533333,139.761165 204.533333,141.933333 C204.533333,144.105501 206.294499,145.866667 208.466667,145.866667 C210.638835,145.866667 212.4,144.105501 212.4,141.933333 C212.4,139.761165 210.638835,138 208.466667,138 Z M165.2,122.266667 L165.2,130.133333 L155.831445,130.133333 L149.072949,143.690658 C148.436417,144.967381 147.160564,145.792923 145.746428,145.862059 L145.533333,145.866719 L66.8666667,145.866719 C65.4472718,145.866719 64.1428498,145.103668 63.4461432,143.877948 L63.3462566,143.690658 L56.5685549,130.133333 L47.2,130.133333 L47.2,122.266667 L165.2,122.266667 Z M147.035222,130.133333 L65.3647784,130.133333 L69.2981117,138 L143.101888,138 L147.035222,130.133333 Z M208.466667,98.6666667 C214.98317,98.6666667 220.266667,103.950163 220.266667,110.466667 C220.266667,116.98317 214.98317,122.266667 208.466667,122.266667 C201.950163,122.266667 196.666667,116.98317 196.666667,110.466667 C196.666667,103.950163 201.950163,98.6666667 208.466667,98.6666667 Z M208.466667,106.533333 C206.294499,106.533333 204.533333,108.294499 204.533333,110.466667 C204.533333,112.638835 206.294499,114.4 208.466667,114.4 C210.638835,114.4 212.4,112.638835 212.4,110.466667 C212.4,108.294499 210.638835,106.533333 208.466667,106.533333 Z M112.493717,75.0666667 C112.532129,78.2932292 111.433561,81.4314451 109.390071,83.9281904 C107.229427,86.3596354 107.229427,90.0221681 109.390071,92.4516927 C113.521224,97.6295573 113.521224,104.975749 109.390071,110.151693 C108.388973,111.233815 107.818315,112.640035 107.774631,114.106073 L107.772949,114.4 L99.9062827,114.4 C99.8659508,111.173438 100.964518,108.037142 103.006087,105.538476 C105.164811,103.110872 105.164811,99.4541013 103.006087,97.0264972 C98.8806965,91.8486326 98.8806965,84.5043617 103.006087,79.3264972 C104.008987,78.2407736 104.581445,76.8326409 104.625347,75.3616303 L104.627051,75.0666667 L112.493717,75.0666667 Z M136.093717,75.0666667 C136.132129,78.2932292 135.033561,81.4314451 132.990071,83.9281904 C130.829427,86.3596354 130.829427,90.0221681 132.990071,92.4516927 C137.121224,97.6295573 137.121224,104.975749 132.990071,110.151693 C131.988973,111.233815 131.418315,112.640035 131.374631,114.106073 L131.372949,114.4 L123.506283,114.4 C123.465951,111.173438 124.564518,108.037142 126.606087,105.538476 C128.764811,103.110872 128.764811,99.4541013 126.606087,97.0264972 C122.480696,91.8486326 122.480696,84.5043617 126.606087,79.3264972 C127.608987,78.2407736 128.181445,76.8326409 128.225347,75.3616303 L128.227051,75.0666667 L136.093717,75.0666667 Z M88.8937173,75.0666667 C88.9321288,78.2932292 87.8335611,81.4314451 85.7900715,83.9281904 C83.6294271,86.3596354 83.6294271,90.0221681 85.7900715,92.4516927 C89.921224,97.6295573 89.921224,104.975749 85.7900715,110.151693 C84.7889729,111.233815 84.2183152,112.640035 84.1746312,114.106073 L84.1729493,114.4 L76.3062827,114.4 C76.2659508,111.173438 77.364518,108.037142 79.4060871,105.538476 C81.5648111,103.110872 81.5648111,99.4541013 79.4060871,97.0264972 C75.2806965,91.8486326 75.2806965,84.5043617 79.4060871,79.3264972 C80.4089866,78.2407736 80.9814447,76.8326409 81.0253467,75.3616303 L81.0270507,75.0666667 L88.8937173,75.0666667 Z M169.133333,86.8666667 C171.305653,86.8666667 173.066667,88.62768 173.066667,90.8 C173.066667,92.97232 171.305653,94.7333333 169.133333,94.7333333 C166.961013,94.7333333 165.2,92.97232 165.2,90.8 C165.2,88.62768 166.961013,86.8666667 169.133333,86.8666667 Z M208.466667,67.2 C214.98317,67.2 220.266667,72.4834962 220.266667,79 C220.266667,85.5165038 214.98317,90.8 208.466667,90.8 C201.950163,90.8 196.666667,85.5165038 196.666667,79 C196.666667,72.4834962 201.950163,67.2 208.466667,67.2 Z M208.466667,75.0666667 C206.294499,75.0666667 204.533333,76.8278319 204.533333,79 C204.533333,81.1721681 206.294499,82.9333333 208.466667,82.9333333 C210.638835,82.9333333 212.4,81.1721681 212.4,79 C212.4,76.8278319 210.638835,75.0666667 208.466667,75.0666667 Z M169.133333,59.3333333 C171.305501,59.3333333 173.066667,61.0944986 173.066667,63.2666667 L173.066667,63.2666667 L173.066667,75.0666667 C173.066667,77.2389867 171.305653,79 169.133333,79 C166.961013,79 165.2,77.2389867 165.2,75.0666667 L165.2,75.0666667 L165.2,67.2 L157.333333,67.2 C155.161013,67.2 153.4,65.4389867 153.4,63.2666667 C153.4,61.0943467 155.161013,59.3333333 157.333333,59.3333333 L157.333333,59.3333333 Z M216.333333,51.4666667 C218.505653,51.4666667 220.266667,53.22768 220.266667,55.4 C220.266667,57.57232 218.505653,59.3333333 216.333333,59.3333333 L200.6,59.3333333 C198.42768,59.3333333 196.666667,57.57232 196.666667,55.4 C196.666667,53.22768 198.42768,51.4666667 200.6,51.4666667 L216.333333,51.4666667 Z"/>
                        </svg>
                        <h5>Oven</h5>
                    </div>
                    <div className='select-device__item' onClick={() => this.props.handleContent(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 236 236">
                            <path fill="#262626" d="M118,23.6 C167.787012,23.6 210.89235,58.1837566 221.680208,106.787695 C232.468066,155.393555 208.044141,204.967383 162.929883,226.028385 C134.447786,239.32067 101.542611,239.32067 73.0624346,226.028385 C27.9481771,204.965462 3.52233048,155.389714 14.3121094,106.783854 C25.1018883,58.1799152 68.2110677,23.5942382 118,23.6 Z M157.333333,211.220768 C132.502246,223.29733 103.497754,223.29733 78.6666667,211.220768 L78.6666667,211.220768 L78.6666667,219.90944 C103.739746,230.891276 132.260254,230.891276 157.333333,219.90944 L157.333333,219.90944 Z M27.6754555,133.733333 L19.8087888,133.733333 C21.2626629,168.192253 40.5932292,199.39388 70.8,216.037565 L70.8,216.037565 L70.8,206.87067 C45.2141278,191.121973 29.0697917,163.744205 27.6754555,133.733333 L27.6754555,133.733333 Z M216.198893,133.733333 L208.332226,133.733333 C206.93597,163.746126 190.787793,191.123893 165.2,206.87067 L165.2,206.87067 L165.2,216.037565 C195.408691,199.395801 214.743099,168.194173 216.198893,133.733333 L216.198893,133.733333 Z M132.31403,152.168913 C120.21058,147.440462 106.551465,148.994205 95.8193035,156.323112 C85.0890625,163.650098 78.6685871,175.805403 78.6666667,188.8 L78.6666667,188.8 L78.6666667,202.389974 C103.190462,215.736035 132.809538,215.736035 157.333333,202.389974 L157.333333,202.389974 L157.333333,188.8 C157.331413,172.601888 147.40013,158.063151 132.31403,152.168913 Z M118,157.333333 C131.033008,157.333333 141.6,167.900326 141.6,180.933333 C141.6,193.966341 131.033008,204.533333 118,204.533333 C104.970833,204.519889 94.4134441,193.9625 94.4,180.933333 C94.4,167.900326 104.966992,157.333333 118,157.333333 Z M180.933333,76.4291993 L180.933333,94.4 C180.919889,105.256999 172.123665,114.053223 161.266667,114.066667 L161.266667,114.066667 L74.7333333,114.066667 C63.8763348,114.053223 55.0801108,105.256999 55.0666667,94.4 L55.0666667,94.4 L55.0666667,76.4291993 C39.9844077,94.1368816 33.0895507,117.395019 36.0875653,140.463021 C39.0836591,163.529101 51.6922202,184.254004 70.8,197.519401 L70.8,197.519401 L70.8,188.8 C70.8,162.732064 91.9320639,141.6 118,141.6 C144.067936,141.6 165.2,162.732064 165.2,188.8 L165.2,188.8 L165.2,197.519401 C184.30778,184.254004 196.916341,163.529101 199.912435,140.463021 C202.910449,117.395019 196.015592,94.1368816 180.933333,76.4291993 L180.933333,76.4291993 Z M118,165.2 C109.311328,165.2 102.266667,172.244661 102.266667,180.933333 C102.266667,189.622005 109.311328,196.666667 118,196.666667 C126.688672,196.666667 133.733333,189.622005 133.733333,180.933333 C133.733333,172.244661 126.688672,165.2 118,165.2 Z M118,31.4666667 C65.251465,31.5319659 21.9291013,73.1623049 19.764616,125.866667 L19.764616,125.866667 L27.6312827,125.866667 C29.8841146,77.5949867 69.676465,39.6175781 118,39.6175781 C166.323535,39.6175781 206.115885,77.5949867 208.368717,125.866667 L208.368717,125.866667 L216.235384,125.866667 C214.070899,73.1623049 170.748535,31.5319659 118,31.4666667 Z M173.066667,68.4088868 C141.80166,40.1303712 94.19834,40.1303712 62.9333333,68.4088868 L62.9333333,68.4088868 L62.9333333,94.4 C62.9333333,100.916504 68.2168295,106.2 74.7333333,106.2 L74.7333333,106.2 L161.266667,106.2 C167.78317,106.2 173.066667,100.916504 173.066667,94.4 L173.066667,94.4 Z M118,66.8666667 C124.516504,66.8666667 129.8,72.1501629 129.8,78.6666667 C129.8,85.1831704 124.516504,90.4666667 118,90.4666667 C111.483496,90.4666667 106.2,85.1831704 106.2,78.6666667 C106.2,72.1501629 111.483496,66.8666667 118,66.8666667 Z M118,74.7333333 C115.827832,74.7333333 114.066667,76.4944986 114.066667,78.6666667 C114.066667,80.8388348 115.827832,82.6 118,82.6 C120.172168,82.6 121.933333,80.8388348 121.933333,78.6666667 C121.933333,76.4944986 120.172168,74.7333333 118,74.7333333 Z M98.3333333,74.7333333 L98.3333333,82.6 L74.7333333,82.6 L74.7333333,74.7333333 L98.3333333,74.7333333 Z M161.266667,74.7333333 L161.266667,82.6 L137.666667,82.6 L137.666667,74.7333333 L161.266667,74.7333333 Z M192.733333,15.7333333 C207.932747,15.7506184 220.249382,28.0672528 220.266667,43.2666667 C220.266667,45.4388348 218.505501,47.2 216.333333,47.2 C214.161165,47.2 212.4,45.4388348 212.4,43.2666667 C212.386556,32.4096681 203.590332,23.6134441 192.733333,23.6 C190.561165,23.6 188.8,21.8388348 188.8,19.6666667 C188.8,17.4944986 190.561165,15.7333333 192.733333,15.7333333 Z M192.733333,31.4666667 C199.249837,31.4666667 204.533333,36.7501629 204.533333,43.2666667 C204.533333,45.4388348 202.772168,47.2 200.6,47.2 C198.427832,47.2 196.666667,45.4388348 196.666667,43.2666667 C196.666667,41.0944986 194.905501,39.3333333 192.733333,39.3333333 C190.561165,39.3333333 188.8,37.5721681 188.8,35.4 C188.8,33.2278319 190.561165,31.4666667 192.733333,31.4666667 Z M43.2666667,15.7333333 C45.4388348,15.7333333 47.2,17.4944986 47.2,19.6666667 C47.2,21.8388348 45.4388348,23.6 43.2666667,23.6 C32.4096681,23.6134441 23.6134441,32.4096681 23.6,43.2666667 C23.6,45.4388348 21.8388348,47.2 19.6666667,47.2 C17.4944986,47.2 15.7333333,45.4388348 15.7333333,43.2666667 C15.7506184,28.0672528 28.0672528,15.7506184 43.2666667,15.7333333 Z M43.2666667,31.4666667 C45.4388348,31.4666667 47.2,33.2278319 47.2,35.4 C47.2,37.5721681 45.4388348,39.3333333 43.2666667,39.3333333 C41.0944986,39.3333333 39.3333333,41.0944986 39.3333333,43.2666667 C39.3333333,45.4388348 37.5721681,47.2 35.4,47.2 C33.2278319,47.2 31.4666667,45.4388348 31.4666667,43.2666667 C31.4666667,36.7501629 36.7501629,31.4666667 43.2666667,31.4666667 Z M192.733333,-1.33226763e-12 C216.617578,0.0288086183 235.971191,19.3824219 236,43.2666667 C236,45.4388348 234.238835,47.2 232.066667,47.2 C229.894499,47.2 228.133333,45.4388348 228.133333,43.2666667 C228.110286,23.7248371 212.275163,7.88971354 192.733333,7.86666667 C190.561165,7.86666667 188.8,6.10550142 188.8,3.93333333 C188.8,1.76116524 190.561165,-1.33226763e-12 192.733333,-1.33226763e-12 Z M43.2666667,-1.33226763e-12 C45.4388348,-1.33226763e-12 47.2,1.76116524 47.2,3.93333333 C47.2,6.10550142 45.4388348,7.86666667 43.2666667,7.86666667 C23.7248371,7.88971354 7.88971354,23.7248371 7.86666667,43.2666667 C7.86666667,45.4388348 6.10550142,47.2 3.93333333,47.2 C1.76116524,47.2 -1.33226763e-12,45.4388348 -1.33226763e-12,43.2666667 C0.0288086183,19.3824219 19.3824219,0.0288086183 43.2666667,-1.33226763e-12 Z"/>
                        </svg>
                        <h5>Robot</h5>
                    </div>
                </div>
                <div className='buttons'>
                    <Button color='secondary' onClick={(this.props.handleToggleDialog)}>Cancel</Button>
                </div>
            </div>
        );
    }
}

export default SelectDevice;