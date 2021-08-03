﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.InteropServices;
using static Auxiliary.RequestMessge.MessgeClass;
using static Auxiliary.RequestMessge.System_Core;
using static Auxiliary.RequestMessge.System_Core.SystemInfo;

namespace Auxiliary.RequestMessge.封装消息
{
    public class 获取系统消息
    {
        public static string 系统消息()
        {
            int 下载中 = 0, 下载完成 = 0;
            foreach (var item in Auxiliary.MMPU.DownList)
            {
                if (item.DownIofo.下载状态)
                    下载中++;
                else
                    下载完成++;
            }
            var systemInfo = new SystemInfo()
            {
                DDTVCore_Ver = MMPU.版本号,
                Room_Quantity = bilibili.RoomList.Count,
                oS_Info = new OS_Info()
                {
                    Associated_Users = Environment.UserName,
                    OS_Ver = RuntimeInformation.OSDescription,
                    OS_Tpye = RuntimeInformation.OSArchitecture.ToString(),
                    Memory_Usage = Process.GetCurrentProcess().WorkingSet64,
                    Runtime_Ver = RuntimeInformation.ProcessArchitecture.ToString(),
                    UserInteractive = Environment.UserInteractive,
                    Current_Directory = Environment.CurrentDirectory,
                    WebCore_Ver = Environment.Version.ToString(),
                    AppCore_Ver = RuntimeInformation.FrameworkDescription

                },
                download_Info = new Download_Info()
                {
                    Downloading = 下载中,
                    Completed_Downloads = 下载完成
                },
                ver_Info = new Ver_Info()
                {
                    IsNewVer = MMPU.是否有新版本,
                    NewVer = MMPU.是否有新版本 ? MMPU.检测到的新版本号 : null,
                    Update_Log = MMPU.是否有新版本 ? MMPU.更新公告 : null,
                }
            };
            return ReturnInfoPackage.InfoPkak((int)ServerSendMessgeCode.请求成功, new List<SystemInfo>() { systemInfo });
        }
    }
}
