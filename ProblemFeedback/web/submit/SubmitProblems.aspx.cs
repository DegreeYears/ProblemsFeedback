using ProblemFeedback.data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Services;
using System.Web.UI;

namespace ProblemFeedback.web.submit
{
    public partial class SubmitProblems : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /// <summary>
        /// 提交点击事件
        /// </summary>
        /// <param name="contents"></param>
        /// <param name="personName"></param>
        /// <param name="department"></param>
        /// <param name="imageUp1"></param>
        /// <param name="imageUp2"></param>
        /// <param name="imageUp3"></param>
        /// <returns></returns>
        [WebMethod]
        public static int SubmitClick(string title,string type,string contents, string personName, string department, string imageUp1, string imageUp2, string imageUp3)
        {
            var p_date = DateTime.Now.ToString("yyyy-MM-dd");
            DBHelper db = new DBHelper();
            Hashtable hstable = new Hashtable();
            hstable.Add("pInfo", type);
            hstable.Add("pTitle", title);
            hstable.Add("pContent", contents);
            hstable.Add("pPerson", personName);
            hstable.Add("pDepartment", department);
            hstable.Add("pImage1", imageUp1);
            hstable.Add("pImage2", imageUp2);
            hstable.Add("pImage3", imageUp3);
            hstable.Add("pSubmitDate", p_date);
            hstable.Add("isResolve", "0");
            hstable.Add("isSetting", "1");
            hstable.Add("hotValue", "1");
            int result = db.AddIdData(hstable);
            //文件操作
            try
            {
                Page page = new Page();
                string folder = DateTime.Now.ToString("yyyyMMdd");
                string path1 = page.Server.MapPath(""); //submit物理路径D:\Development\VSProject - 副本\ProblemFeedback\img/20190520/
                string path2 = path1.Substring(0,path1.Length-10)+ "img\\uploadImgCache\\";
                string path3 = path1.Substring(0, path1.Length - 10) + "img\\uploadImg\\";
                if (Directory.Exists(path2 + folder))
                {
                    DirectoryInfo dir = new DirectoryInfo(path2+folder);
                    FileSystemInfo[] fileinfo = dir.GetFileSystemInfos();  //获取目录下（不包含子目录）的文件和子目录
                    foreach (FileSystemInfo i in fileinfo)
                    {
                        if (!Directory.Exists(path3 + folder))
                        {
                            Directory.CreateDirectory(path3 + folder);
                        }
                        File.Copy(i.FullName, path3 +folder+ "\\" + i.Name, true);
                        i.Delete();
                    }
                }
            }
            catch (Exception)
            {
                return 0;
            }
            return result;
        }
    }
}