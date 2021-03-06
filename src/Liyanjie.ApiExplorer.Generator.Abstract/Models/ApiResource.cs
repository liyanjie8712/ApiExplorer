﻿using System.Collections.Generic;
using System.Linq;

namespace Liyanjie.ApiExplorer.Generator.Models
{
    /// <summary>
    /// 
    /// </summary>
    public class ApiResource
    {
        /// <summary>
        /// 
        /// </summary>
        public string GroupName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Path { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Method { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Summary { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string[] Produces { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiParameter> Parameters { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiResponse> Responses { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IList<ApiChange> Changes { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string Timestamp => Changes?.OrderByDescending(_ => _.Timestamp).FirstOrDefault()?.Timestamp?.ToString("yyyy-MM-dd HH:mm:ss");

        /// <summary>
        /// 
        /// </summary>
        public bool? Obsolete { get; set; }
    }
}
