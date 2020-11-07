var _E9_A3_9E_E8_A1_8C_E8_80_85, _E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95;

function PlayerToggleFlightEvent(_E9_A3_9E_E8_A1_8C_E8_80_85) {
  if (manager.PlayerIsOP(_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer()) == false) {
    _E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer().sendMessage('§4您正在飞行，检测到您不是管理员，请停止飞行');
    var tmpX = Math.floor(Math.random() * _E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95.length);
    _E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95.splice(tmpX, 0, _E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer());
    logger.warning(['§4玩家“',_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer(),'”正在飞行'].join(''));
    entity.setPlayerExpLevel(_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer(),0);
    if (manager.getPlayerGameMode(_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer()) == 1) {
      logger.warning(['玩家“',_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer(),'”开启了创造模式，即将移除游戏'].join(''));
      var tmpX2 = Math.floor(Math.random() * _E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95.length);
      _E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95.splice(tmpX2, 0, _E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer());
      manager.kickPlayer(_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer(),'§4请勿使用创造模式');
    } else {
      server.dispatchCommand(server.getConsoleSender(),('/kill ' + String(_E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer())));
      _E9_A3_9E_E8_A1_8C_E8_80_85.getPlayer().sendTitle('§4请勿开挂飞行');
    }
  }
}


_E5_BC_80_E6_8C_82_E9_BB_91_E5_90_8D_E5_8D_95 = [];
