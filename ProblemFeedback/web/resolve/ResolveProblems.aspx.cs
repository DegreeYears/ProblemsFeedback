using ProblemFeedback.data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ProblemFeedback.web.resolve
{
    public partial class ResolveProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 更新页面
        /// </summary>
        /// <param name="id">0,1</param>
        [WebMethod]
        public static string UpdateView(int id)
        {
            DBHelper db = new DBHelper();
            DataSet ds = new DataSet();
            var strSql = "";
            var dataStr = "";
            if (id == 0)
            {
                strSql = "select top 1 * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 order by hotValue DESC";
            }
            else
            {
                strSql = "select * from problemsSubmit.dbo.ProblemsInfos where isSetting =1 and id=" + id;
            }
            ds = db.SelectData(strSql);
            if (ds.Tables[0].Rows[0][10].ToString() == "1")
            {
                var strSql2 = "";
                if (id == 0)
                {
                    strSql2 = "select * from problemsSubmit.dbo.ProblemsResolveInfos where pId = (select top 1 id from problemsSubmit.dbo.ProblemsInfos where isSetting =1 order by hotValue DESC)";
                }
                else
                {
                    strSql2 = "select * from ProblemsResolveInfos where pId =" + id;
                }
                DataSet ds2 = new DataSet();
                ds2 = db.SelectData(strSql2);
                dataStr = dataStr + "[{" +
                    "flag:'" + 1 +
                    "',title:'" + ds.Tables[0].Rows[0][2].ToString() +
                    "',content:" + "'" + ds.Tables[0].Rows[0][3].ToString() +
                    "',image1:" + "'" + ds.Tables[0].Rows[0][4].ToString() +
                    "',image2:" + "'" + ds.Tables[0].Rows[0][5].ToString() +
                    "',image3:" + "'" + ds.Tables[0].Rows[0][6].ToString() +
                    "',person:" + "'" + ds.Tables[0].Rows[0][7].ToString() +
                    "',date:" + "'" + ds.Tables[0].Rows[0][9].ToString() +
                    "',resolve:" + "'" + ds.Tables[0].Rows[0][10].ToString() +
                    "',hotvalue:" + "'" + ds.Tables[0].Rows[0][12].ToString() +
                    "',id:" + "'" + ds.Tables[0].Rows[0][0] +
                    "',r_content:" + "'" + ds2.Tables[0].Rows[0][2].ToString() +
                    "',r_image1:" + "'" + ds2.Tables[0].Rows[0][5].ToString() +
                    "',r_image2:" + "'" + ds2.Tables[0].Rows[0][6].ToString() +
                    "',r_image3:" + "'" + ds2.Tables[0].Rows[0][7].ToString() +
                    "'}]";
            }
            else if (ds.Tables[0].Rows[0][10].ToString() == "0")
            {
                dataStr = dataStr + "[{" +
                    "flag:'" + 2 +
                    "',title:'" + ds.Tables[0].Rows[0][2].ToString() +
                    "',content:" + "'" + ds.Tables[0].Rows[0][3].ToString() +
                    "',image1:" + "'" + ds.Tables[0].Rows[0][4].ToString() +
                    "',image2:" + "'" + ds.Tables[0].Rows[0][5].ToString() +
                    "',image3:" + "'" + ds.Tables[0].Rows[0][6].ToString() +
                    "',person:" + "'" + ds.Tables[0].Rows[0][7].ToString() +
                    "',date:" + "'" + ds.Tables[0].Rows[0][9].ToString() +
                    "',resolve:" + "'" + ds.Tables[0].Rows[0][10].ToString() +
                    "',hotvalue:" + "'" + ds.Tables[0].Rows[0][12].ToString() +
                    "',id:" + "'" + ds.Tables[0].Rows[0][0] +
                    "'}]";
            }
            return dataStr;
        }
        [WebMethod]
        public static int SubmitResolve(string content, int id, string imageUp1, string imageUp2, string imageUp3)
        {
            var p_date = DateTime.Now.ToString("yyyy-MM-dd");
            DBHelper db = new DBHelper();
            Hashtable hstable = new Hashtable();
            hstable.Add("pId", id);
            hstable.Add("rContent", content);
            hstable.Add("rImage1", imageUp1);
            hstable.Add("rImage2", imageUp2);
            hstable.Add("rImage3", imageUp3);
            hstable.Add("rDate", p_date);
            int result1 = db.AddData_TableId(hstable, "ProblemsResolveInfos");

            hstable.Clear();
            hstable.Add("isResolve", 1);
            int result2 = db.SetData_TableId(hstable, "ProblemsInfos",id);
            //文件操作
            try
            {
                Page page = new Page();
                string folder = DateTime.Now.ToString("yyyyMMdd");
                string path1 = page.Server.MapPath(""); //submit物理路径D:\Development\VSProject - 副本\ProblemFeedback\img/20190520/
                string path2 = path1.Substring(0, path1.Length - 11) + "img\\uploadImgCache\\";
                string path3 = path1.Substring(0, path1.Length - 11) + "img\\uploadImg\\";
                if (Directory.Exists(path2 + folder))
                {
                    DirectoryInfo dir = new DirectoryInfo(path2 + folder);
                    FileSystemInfo[] fileinfo = dir.GetFileSystemInfos();  //获取目录下（不包含子目录）的文件和子目录
                    foreach (FileSystemInfo i in fileinfo)
                    {
                        if (!Directory.Exists(path3 + folder))
                        {
                            Directory.CreateDirectory(path3 + folder);
                        }
                        File.Copy(i.FullName, path3 + folder + "\\" + i.Name, true);
                        i.Delete();
                    }
                }
            }
            catch (Exception)
            {
                return 0;
            }
            if (result1 == 1 && result2 == 1)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}
