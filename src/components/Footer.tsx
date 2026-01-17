import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      className="py-12 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-mars bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Mars Bites
            </motion.h3>
            <p className="text-muted-foreground">
              Dining beyond Earth since 2157
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <motion.p whileHover={{ x: 5, color: "hsl(18 85% 55%)" }} transition={{ duration: 0.2 }}>
                Mon-Fri: 11:00 - 22:00 MST
              </motion.p>
              <motion.p whileHover={{ x: 5, color: "hsl(18 85% 55%)" }} transition={{ duration: 0.2 }}>
                Sat-Sun: 10:00 - 23:00 MST
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Mars Colony, Sector 7</motion.p>
              <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Olympus Mons Terrace</motion.p>
              <motion.p whileHover={{ x: 5, color: "hsl(18 85% 55%)" }} transition={{ duration: 0.2 }}>
                +1-MARS-BITES
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-border text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; 2157 Mars Bites. All rights reserved across the solar system.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};
