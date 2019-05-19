using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace ProblemFeedback.web.submit
{
    /// <summary>
    /// UploadImage 的摘要说明
    /// </summary>
    public class UploadImage : IHttpHandler
    {
        /// <summary>
        /// 图片上传
        /// </summary>
        /// <param name="context"></param>
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            HttpPostedFile file = context.Request.Files[0];
            if (file != null)
            {
                try
                {
                    //图片保存的文件夹路径
                    string path = context.Server.MapPath("../../img/uploadImgCache/");
                    //每天上传的图片一个文件夹
                    string folder = DateTime.Now.ToString("yyyyMMdd");
                    //如果文件夹不存在，则创建
                    if (!Directory.Exists(path + folder))
                    {
                        Directory.CreateDirectory(path + folder);
                    }
                    //上传图片的扩展名
                    string type = file.FileName.Substring(file.FileName.LastIndexOf('.'));
                    //保存图片的文件名
                    string saveName = Guid.NewGuid().ToString() + type;
                    //保存图片
                    file.SaveAs(path + folder + "/" + saveName);
                    context.Response.Write(folder + "/" + saveName);
                }
                catch
                {
                    context.Response.Write("上传失败");
                }
            }
        }

        public bool IsReusable {
            get {
                return false;
            }
        }
    }
}