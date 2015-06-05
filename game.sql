/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2015-06-06 01:59:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `question`
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `question_id` varchar(32) NOT NULL,
  `question_key` varchar(32) DEFAULT NULL,
  `question_content` varchar(256) DEFAULT NULL,
  `question_grade` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of question
-- ----------------------------
INSERT INTO `question` VALUES ('1', '1e42904f76fbaea40bed078ae0533e89', '小伙伴们快来看看这个吧！（超简单的，就不给提示了 ≥▽≤ ~~~~~~）\r\n<img src=\"75d407f42c4d7319fc46ebfcb955c6e3.bmp\"></img>', '100');
INSERT INTO `question` VALUES ('2', 'ca3d626df6445e8754a7492b0400e74a', '协会的小林的帽子变绿了，他很生气，质问小绿是不是他干的。\r\n小绿说跟他没关系，并送了一句话给小黑。但是小黑找不到，你能找到吗。', '200');

-- ----------------------------
-- Table structure for `record`
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record` (
  `amount` int(32) unsigned NOT NULL AUTO_INCREMENT,
  `user_ip` varchar(32) NOT NULL,
  `question_id` varchar(32) NOT NULL,
  `question_grade` varchar(32) NOT NULL,
  `commit_time` varchar(32) NOT NULL,
  PRIMARY KEY (`amount`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES ('25', '0:0:0:0:0:0:0:1', '1', '100', '13:40:46');
INSERT INTO `record` VALUES ('26', '0:0:0:0:0:0:0:1', '2', '200', '13:46:58');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_ip` varchar(32) NOT NULL,
  `user_grade` varchar(32) DEFAULT NULL,
  `start_time` varchar(32) DEFAULT NULL,
  `end_time` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`user_ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0:0:0:0:0:0:0:1', '800', '13:46:58', '00:00:00');
INSERT INTO `user` VALUES ('1', '2', '3', '4');
INSERT INTO `user` VALUES ('10', '2', '3', '4');
INSERT INTO `user` VALUES ('101', '20', '3', '4');
INSERT INTO `user` VALUES ('11', '2', '3', '4');
INSERT INTO `user` VALUES ('111', '2', '3', '4');
INSERT INTO `user` VALUES ('127.0.0.1', '150', '23:25:19', '00:00:00');
INSERT INTO `user` VALUES ('127.1.0.3', '0', '22:12:55', '00:00:00');
INSERT INTO `user` VALUES ('172.18.93.29', '300', '23:34:57', '00:00:00');
INSERT INTO `user` VALUES ('172.22.114.141', '200', '11:32:08', '00:00:00');
INSERT INTO `user` VALUES ('172.22.114.142', '100', '11:25:57', '00:00:00');
INSERT INTO `user` VALUES ('172.22.114.175', '100', '11:21:32', '00:00:00');
INSERT INTO `user` VALUES ('2', '2', '3', '4');
INSERT INTO `user` VALUES ('3', '2', '3', '4');
INSERT INTO `user` VALUES ('6', '2', '3', '4');
INSERT INTO `user` VALUES ('7', '2', '3', '4');
INSERT INTO `user` VALUES ('8', '2', '3', '4');
INSERT INTO `user` VALUES ('9', '2', '3', '4');
