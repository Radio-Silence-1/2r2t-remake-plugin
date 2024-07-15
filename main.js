function allowed(str) {// returns true if a command is allowed to run for normal users, the blacklist in other words. it only does admin= rn
    const regex = /\s*admin\s*=\s*/i;
    return regex.test(str);
}

js Vars.netServer.clientCommands.register("js3","<ARGUMENT...>","test",extend(CommandHandler.CommandRunner, {
    accept(args, player){
        let result=null
        try{
            result=eval(args.join(""))
        }
        catch(e){
            result=e
        }
        player.sendMessage(result)             
    }         
}))
