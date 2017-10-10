Page({
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '020-123456',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})