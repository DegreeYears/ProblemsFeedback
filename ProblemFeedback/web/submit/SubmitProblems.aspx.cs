﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.submit
{
    public partial class SubmitProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        #region 提交点击事件
        [WebMethod]
        public static string SubmitClick(string contents, string personName, string department, string imageUp1, string imageUp2, string imageUp3)
        {
            SqlConnection con = null;
            SqlCommand cmd = null;

            string date = DateTime.Now.ToString("yyyy-MM-dd");
            string info = "销售相关";
            string conStr = @"server=.\sqlexpress;database=problemsSubmit;integrated security=true";
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    string sqlStr = "insert into problemsSubmit.dbo.ProblemsInfos values('" + info + "','" + contents + "','','','','" + personName + "','" + department + "','" + date + "')";
                    cmd = new SqlCommand(sqlStr, con);
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
        /// <summary>
        /// 图片上传
        /// </summary>
        [WebMethod]
        public static string ImgUploadBtnClick(HttpContext context)
        {
            Console.WriteLine();
            try
            {
                HttpFileCollection file = context.Request.Files;
                //HttpPostedFile file = Page.Request.Files["fileUpload"];
                string imgName = "";
                if (file.Count > 0)
                {
                    imgName = "img" + DateTime.Now.ToString("yyyyMMddHHmmss");
                    file[0].SaveAs(("../img/uploadImg/") + imgName);
                }
                return imgName;
            }
            catch (Exception e)
            {
                //输出异常日志
                return null;
            }
        }
    }
}