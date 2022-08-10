// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Antd
import { Space, Table, Modal, Button, Input } from "antd";

// Api
import fetchUser from "../../api/user/fetchUser";

// Style
import "./Dashboard.css";

// Helper
import getUserForDashBoard from "../../helper/user/getUserForDashBoard";
import deleteContact from "../../api/contact/deleteContact";
import addContact from "../../api/contact/addContact";

export default function Dashboard() {
  const user = useSelector((state) => state.user.user);

  const [tableData, setTableData] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [addPhoneNumberModalVisible, setAddPhoneNumberModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      width: "15%",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button onClick={() => handleOnAddPhoneNumber(record)}>
            Add Number
          </Button>
          <Button onClick={() => handleOnDeletePhoneNumber(record)}>
            Delete Phone Number
          </Button>
        </Space>
      ),
    },
  ];

  const handleOnAddOnOkButtonClick = () => {
    addContact(selectedUser, phoneNumber);

    setPhoneNumber(null)
    setAddPhoneNumberModalVisible(false);
  };

  const handleOnAddPhoneNumber = (record) => {
    setAddPhoneNumberModalVisible(true);
    setSelectedUser(record);
  };

  const handleOnDeleteOnOkButtonClick = () => {
    deleteContact(selectedUser);

    setDeleteModalVisible(false);
  };

  const handleOnDeletePhoneNumber = (record) => {
    setDeleteModalVisible(true);
    setSelectedUser(record);
  };

  useEffect(() => {
    fetchUser();
  }, []);


  useEffect(() => {
    if (user) {
      const formattedData = getUserForDashBoard(user);
      setTableData(formattedData);
    }
  }, [user]);

  return (
    <>
      <div className="dashboard-container">
        <Table columns={columns} dataSource={tableData} />
      </div>
      <Modal
        visible={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onOk={() => handleOnDeleteOnOkButtonClick()}
        content={"Silmek istediğinize emin misiniz?"}
      />
      <Modal
        visible={addPhoneNumberModalVisible}
        onCancel={() => setAddPhoneNumberModalVisible(false)}
        onOk={() => handleOnAddOnOkButtonClick()}
        title={"Add Number"}
      >
        <Input
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Modal>
    </>
  );
}
