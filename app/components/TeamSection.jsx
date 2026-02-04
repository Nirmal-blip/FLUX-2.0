"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// New Faculty Data
const faculty = [
  {
    name: "Dr. Kumar Abhishek",
    role: "Dean of Student Affairs",
    img: "/images/Senate/Abhishek_sir.jpg",
    color: "from-emerald-400 to-teal-500",
    border: "group-hover:border-emerald-500"
  },
  {
    name: "Dr. Mithilesh Dixit",
    role: "SAC Chairperson",
    img: "/images/Senate/Mithilesh_sir.jpg",
    color: "from-blue-400 to-indigo-500",
    border: "group-hover:border-blue-500"
  },
  {
    name: "Dr. Gautam Borisagar",
    role: "SAC vice-chairperson",
    img: "/images/Senate/gautam_sir.jpg",
    color: "from-red-400 to-rose-500",
    border: "group-hover:border-red-500"
  },
  {
    name: "Dr. Ravi Kashikar",
    role: "SAC vice-chairperson",
    img: "/images/Senate/Ravi_sir.jpg",
    color: "from-violet-400 to-fuchsia-500",
    border: "group-hover:border-violet-500"
  },
];

const team = [
  {
    name: "Satyam Kumar",
    role: "President",
    img: "/images/Senate/Satyam.jpg",
    color: "from-yellow-400 to-orange-500",
    border: "group-hover:border-yellow-500"
  },
  {
    name: "Shrey Chaudhary",
    role: "Vice President",
    img: "/images/Senate/Shrey.png",
    color: "from-cyan-400 to-blue-500",
    border: "group-hover:border-cyan-500"
  },
  {
    name: "Sakshi Sureka",
    role: "Vice President",
    img: "/images/Senate/Sakshi.jpg",
    color: "from-pink-400 to-purple-500",
    border: "group-hover:border-pink-500"
  },
];

export default function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-black text-white"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* --- FACULTY SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-emerald-500" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase font-mono">
              FACULTY MENTORS
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>
          <h1 className="text-4xl font-black font-space-grotesk text-white">
            Committee <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Heads</span>
          </h1>
        </motion.div>

        {/* Faculty Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {faculty.map((member, i) => (
            <MemberCard key={i} member={member} inView={inView} delay={i * 0.1} />
          ))}
        </div>

        {/* --- STUDENT SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-500 uppercase font-mono">
              STUDENT LEADERSHIP
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space-grotesk text-white">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Senate</span>
          </h1>
        </motion.div>

        {/* Students Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <MemberCard key={i} member={member} inView={inView} delay={i * 0.2} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Reusable Card Component to maintain the same design
function MemberCard({ member, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className={`active:scale-95 duration-300 relative bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-white/10 ${member.border} transition-all overflow-hidden flex flex-col items-center pb-8 group-hover:bg-zinc-900`}>
        
        {/* Top Gradient Blob */}
        <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${member.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

        {/* Image */}
        <div className="mt-12 mb-6 relative">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} blur-md opacity-50 group-hover:opacity-80 transition-opacity`} />
          <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-sm">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full rounded-full object-cover border-4 border-black/50"
            />
          </div>
        </div>

        {/* Info */}
        <div className="text-center px-6">
          <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">
            {member.name}
          </h3>
          <div className={`inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5`}>
            <p className={`font-bold uppercase tracking-widest text-[10px] bg-clip-text text-transparent bg-gradient-to-r ${member.color}`}>
              {member.role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}