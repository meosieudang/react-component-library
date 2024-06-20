import axios from "axios";

const getListGift = () => {
    return axios.get("api/listgift/get_listgiftlipovitan");
}

const exportListGift = () => {
    return axios.get("api/listgift/export_listgift_lipovitan");
}
const ListGiftServices = {
    getListGift,
    exportListGift
}

export default ListGiftServices;