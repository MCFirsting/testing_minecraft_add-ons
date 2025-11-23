import { world, system } from "@minecraft/server"
system.beforeEvents.startup.subscribe(ev => {
    ev.itemComponentRegistry.registerCustomComponent("demo:camera_api", {
        onUse: e => {
            //วนลูปการใช่งานระหว่างผู่เล่นในทุกครั้ง
            for (const Player of world.getPlayers()) {
                //การตั้งมุมกล้อง
                Player.camera.setCamera("minecraft:fixed_boom", { targetEntity: Player, entityOffset: { x: 10, y: 10, z: 10 } })
                //การตั้งระยะ FOV
                Player.camera.setFov({ fov: 30 })
            }
        }
    })
})