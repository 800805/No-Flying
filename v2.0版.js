var flying_player, find_player, find_to_player, flew_player, a_flew_player;

manager.createCommand('fly','使用该指令可查询服务器上开挂/创造的黑名单','command');
flew_player = manager.createConfig(manager.getFile('YML', '开挂名单'+'.yml'), 2);

function PlayerToggleFlightEvent(flying_player) {
  if (manager.PlayerIsOP(flying_player.getPlayer()) == false) {
    flying_player.getPlayer().sendMessage('§4您正在飞行，检测到您不是管理员，请停止飞行');
    logger.warning(['§4玩家“',flying_player.getPlayer(),'”正在飞行'].join(''));
    entity.setPlayerExpLevel(flying_player.getPlayer(),0);
    if (manager.getPlayerGameMode(flying_player.getPlayer()) == 1) {
      logger.warning(['玩家“',flying_player.getPlayer(),'”开启了创造模式，即将移除游戏'].join(''));
      server.dispatchCommand(server.getConsoleSender(),('/gamemode 0 ' + String(flying_player.getPlayer())));
      server.dispatchCommand(flying_player.getPlayer(),'/kill ');
      manager.kickPlayer(flying_player.getPlayer(),'请勿使用创造模式');
      flew_player.set(String(flying_player.getPlayer()),'使用创造模式');
    } else {
      server.dispatchCommand(flying_player.getPlayer(),'/kill ');
      flying_player.getPlayer().sendTitle('§4请勿开挂飞行');
      flew_player.set(String(flying_player.getPlayer()),'开挂飞行');
    }
    flew_player.save();
  }
}

function command(find_player, find_to_player) {
  if (find_to_player == null) {
    var a_flew_player_list = manager.getAllKeyInConfig(flew_player);
    for (var a_flew_player_index in a_flew_player_list) {
      a_flew_player = a_flew_player_list[a_flew_player_index];
      find_player.getPlayer().sendMessage(a_flew_player);
    }
  } else if (flew_player.get(find_to_player[0]) == null) {
    find_player.getPlayer().sendMessage('此人无违规纪录');
  } else {
    find_player.getPlayer().sendMessage(flew_player.get(find_to_player[0]));
  }
}

