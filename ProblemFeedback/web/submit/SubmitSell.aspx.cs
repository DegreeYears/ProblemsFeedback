using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web
{
    public partial class SubmitSell : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }
        #region 提交点击事件
        [WebMethod]
        public static string SubmitClick(string contents, string personName, string department)
        {
            SqlConnection con = null;
            SqlCommand cmd = null;

            string date = DateTime.Now.ToString("yyyy-mm-dd");
            string info = "销售相关";
            //string contents = Request.Form["内容"].ToString();
            //string personName = Request.Form["提交人员"].ToString();
            //string department = Request.Form["部门职位"].ToString();
            string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();

                    string sqlStr = "insert into problemsSubmit.dbo.ProbelmsInfo values('" + info + "','" + contents + "','','','','" + personName + "','" + department + "','" + date + "')";
                    cmd = new SqlCommand(sqlStr, con);
                    //返回受影响的行数
                    return cmd.ExecuteNonQuery().ToString();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
        #endregion
        #region 图片上传
        /// <summary>
        /// 图片上传
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        [WebMethod]
        public static string ImgUploadBtnClick(HttpPostedFile upFile)
        {
            try
            {
                upFile.SaveAs(("../img/uploadImg/") + upFile.FileName.ToString());
                return "success";
            }
            catch (Exception)
            {
                return null;
            }
        }
        #endregion
    }
}