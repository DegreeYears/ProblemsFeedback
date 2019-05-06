using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProblemFeedback.data
{
    /// <summary>
    /// 数据库操作类
    /// </summary>
    public class DBHelper
    {
        private SqlConnection con = null;
        private SqlCommand cmd = null;
        private string conStr = "Data Source=./sqlexpress;Integrated Security = SSPI; database=problemsSubmit";
        //数据库连接
        public void Con() {
            try
            {
                using (con = new SqlConnection(conStr))
                {
                    con.Open();
                    Console.WriteLine("数据库已打开");
                    cmd = con.CreateCommand();
                    cmd.CommandText = "select * from ProblemsInfo";
                    Console.WriteLine(cmd.ExecuteNonQuery());
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
        //增
        public void AddData() {
        }
        //删
        public void DeleteData() {
        }
        //改
        public void UpdateData() {
        }
        //查
        public void SelectData() {
            //返回数据集
            using (SqlConnection cnn = new SqlConnection(conStr))
            {
                cnn.Open();
                SqlCommand cmd = cnn.CreateCommand();
                cmd.CommandText = "";
                IAsyncResult ar = cmd.BeginExecuteReader();
                using (SqlDataReader dr = cmd.EndExecuteReader(ar))
                {
                    // 显示字段名
                    for (int i = 0; i < dr.FieldCount; i++)
                        Console.Write(dr.GetName(i).PadRight(16));
                    Console.WriteLine();
                    // 显示记录
                    while (dr.Read())
                    {
                        for (int i = 0; i < dr.FieldCount; i++)
                            Console.Write("{0}".PadRight(16), dr[i]);
                        Console.WriteLine();
                    }
                }
            }
        }
    }
}