// ============================================================
//  DevOps / Linux typing word list
// ============================================================
const wordList = [
  "docker","kubernetes","deploy","nginx","server","container","kubernetes",
  "linux","shell","bash","terminal","command","script","pipeline","config",
  "configmap","registry","cluster","namespace","volume","storage","network",
  "proxy","backend","frontend","gateway","ingress","service","endpoint",
  "load","balance","scaling","replica","pod","worker","master","node","host",
  "domain","daemon","monitor","logging","metrics","alert","deployment",
  "ci","cd","build","test","review","release","version","branch","commit",
  "merge","push","pull","fetch","clone","remote","origin","main","feature",
  "hotfix","release","tag","hash","diff","status","log","stash","rebase",
  "systemctl","journalctl","systemd","service","process","daemon","socket",
  "memory","cpu","process","thread","kernel","uptime","reboot","shutdown",
  "auth","ssh","key","tls","ssl","certificate","crypto","token","secret",
  "user","group","permission","chmod","chown","root","sudo","access",
  "firewall","iptables","proxy","dns","hostname","subnet","port","tcp",
  "udp","ip","interface","gateway","packet","traffic","firewall","security",
  "grep","sed","awk","find","locate","which","whereis","ps","top","htop",
  "kill","signal","cat","echo","read","printf","tail","head","less","more",
  "sort","uniq","wc","diff","patch","tr","cut","paste","join","tee",
  "tar","zip","gzip","unzip","archive","backup","restore","compress",
  "disk","partition","filesystem","mount","unmount","fstab","lvm","raid",
  "apt","yum","dnf","pacman","install","upgrade","package","repository",
  "source","binary","compile","build","make","cmake","gcc","python","node",
  "go","rust","java","npm","pip","gradle","maven","dependency","module",
  "ansible","playbook","inventory","task","role","module","handler","facts",
  "group","host","template","gather","configure","automate","provision",
  "terraform","infrastructure","resource","provider","module","plan","apply",
  "destroy","state","backend","workspace","variable","output","import",
  "cloud","aws","azure","gcp","instance","region","availability","zone",
  "vpc","subnet","ec2","s3","bucket","lambda","function","rds","database",
  "iam","policy","role","elastic","kubernetes","eks","ecs","dynamodb",
  "gitlab","jenkins","runner","artifact","trigger","stage","matrix","job",
  "dockerfile","image","pull","push","build","tag","layer","compose","stack",
  "swarm","orchestration","microservice","grpc","rest","api","endpoint",
  "json","yaml","toml","ini","env","variable","export","source","dotenv",
  "kubernetes","kubectl","helm","chart","release","values","tiller","kustomize",
  "prometheus","grafana","export","scrape","query","dashboard","metric",
  "grafana","loki","tempo","promtail","otel","tracing","telemetry",
  "elasticsearch","kibana","filebeat","metricbeat","logstash","beats",
  "vault","consul","nomad","raft","secrets","encryption","keychain",
  "openstack","nova","neutron","cinder","keystone","glance","horizon",
  "vagrant","virtualbox","vmware","hypervisor","provision","box","boot",
  "proxy","squid","haproxy","envoy","istio","linkerd","service","mesh",
  "canary","blue","green","rollout","deploy","strategy","recreate","rolling",
  "liveness","readiness","startup","probe","healthcheck","health","status",
  "grep","regex","pattern","match","replace","substitute","expression",
  "cron","schedule","ticker","periodic","daily","weekly","hourly","minute",
  "monitoring","observability","logging","tracing","metrics","dashboard",
  "audit","compliance","audit","policy","governance","remediation","scan",
  "vulnerability","patch","cve","scan","aqua","trivy","syft","grype",
  "sre","devops","platform","infrastructure","as","code","automation",
  "ansible","chef","puppet","saltstack","provision","configuration",
  "drift","immutable","declarative","idempotent","orchestrate","cluster",
  "failover","redundancy","replication","quorum","raft","consensus",
  "hypervisor","proxmox","qemu","kvm","libvirt","xen","virtualization",
  "vpn","wireguard","openvpn","tunnel","endpoint","encrypt","handshake",
  "zabbix","nagios","icinga","datadog","newrelic","splunk","sumo","collector",
  "shellcheck","lint","format","style","prettier","standard","eslint",
  "chaos","fault","injection","litmus","gremlin","resilience","blast",
  "serverless","function","trigger","cold","start","execution","platform",
  "edge","cdn","cache","origin","purge","latency","bandwidth","throughput",
  "queues","redis","kafka","rabbitmq","nats","streaming","consumer","producer",
  "observability","trace","span","context","propagation","sampler","collector",
  "virtualization","container","namespace","cgroup","overlay","union","fs",
  "seccomp","apparmor","selinux","capability","sandbox","hardening",
  "snapshot","clone","thin","thick","provisioning","deduplication","backup",
  "storage","ceph","glusterfs","minio","nfs","iscsi","lun","iops","fio",
  "gitops","argo","flux","continuous","delivery","sync","source","target",
  "image","tag","digest","manifest","layer","vulnerability","scanning",
  "secret","configmap","environment","variable","injection","reference",
  "horizontal","pod","autoscaler","vertical","metric","target","scale",
  "hpa","vpa","limit","request","resource","quota","limitrange","fairness",
  "priority","preemption","scheduler","tolerations","affinity","taint",
  "binding","namespace","quota","resource","account","sa","serviceaccount",
  "ingress","nginx","controller","annotation","tls","secret","routing",
  "config","reload","graceful","reload","worker","processes","keepalive",
  "redirect","rewrite","location","upstream","proxy","pass","timeout",
  "dynamic","reload","reconfig","signal","hup","usr","termination","grace",
  "oom","killed","exit","code","crash","loop","restart","backoff","waiting",
  "running","terminated","succeeded","failed","pending","scheduling","initial",
  "pod","affinity","anti","node","selector","tolerations","taints","drain",
  "cordon","uncordon","evict","force","ignore","daemonset","maintenance",
  "control","plane","etcd","api","server","scheduler","controller","manager",
  "kubelet","kube","proxy","containerd","cri","o","runtime","shim","gvisor",
  "security","context","run","as","user","nonroot","privileged","caps","drop",
  "network","policy","allow","deny","ingress","egress","peer","selector",
  "port","target","protocol","service","type","clusterip","nodeport","lb",
  "external","dns","annotations","publish","notready","unreachable","unreachable",
  "priority","className","storage","class","reclaim","policy","retain","delete",
  "binding","phase","bound","lost","pending","provisioner","parameters",
  "allow","volume","expansion","snapshot","class","restore","clone",
  "audit","dynamic","persistent","volume","claims","capacity","access",
  "storage","os","filesystem","overlay","vfs","devicemapper","driver",
  "registry","docker","hub","ghcr","quay","artifactory","mirror","insecure",
  "login","logout","credential","helper","pass","store","token","basic",
  "auth","bearer","anonymous","namespace","repository","organization",
  "image","manifest","digest","layer","history","parent","comment","created",
  "config","entrypoint","cmd","env","workdir","user","volume","expose",
  "label","maintainer","stop","signal","healthcheck","onbuild","shell",
  "arg","build","multi","stage","target","from","as","cache","inline",
  "dangling","prune","cleanup","df","inspect","stats","events","update",
  "attach","detach","exec","run","start","stop","restart","rm","kill",
  "network","create","rm","connect","disconnect","bridge","host","none",
  "overlay","macvlan","ipvlan","vlan","subnet","gateway","ip-range",
  "volume","create","rm","driver","opt","mountpoint","size","backing",
  "fs","plugin","compose","project","service","volume","network","build",
  "dependencies","scale","healthcheck","restart","deploy","config","env",
  "network","external","internal","named","ipam","driver","subnet","gateway",
  "healthcheck","interval","timeout","retries","start","period","test",
  "cmd","command","entrypoint","shell","interactive","tty","privileged",
  "pids","cpus","memory","swap","devices","ulimit","sysctl","cap","add",
  "cap","drop","read","only","tmpfs","bind","mount","anonymous","named"
];

const SPRINT_COMMANDS = [
  "docker ps -a", "docker build -t app .", "docker-compose up -d",
  "docker logs -f container", "docker system prune -af", "docker exec -it app bash",
  "docker push registry/app:latest", "docker network ls", "docker image ls",
  "kubectl get pods", "kubectl apply -f deploy.yaml", "kubectl logs -f pod/api",
  "kubectl scale deploy api --replicas=3", "kubectl get svc -n prod",
  "kubectl config current-context", "kubectl get events", "helm list -A",
  "helm install release ./chart", "terraform plan", "terraform state list",
  "ansible-playbook deploy.yml", "git status", "git log --oneline -10",
  "git branch -a", "git diff HEAD~1", "git pull origin main",
  "ssh user@server", "ls -la", "cat /etc/os-release",
  "systemctl status nginx", "grep -rn 'error' /var/log/",
  "chmod +x deploy.sh", "curl -s localhost:8080/health", "top -bn1 | head -20",
  "free -h && df -h", "tar -czvf backup.tar.gz /etc/", "rsync -avz src/ dest:/path/",
  "ss -tlnp | grep :80", "ps aux | grep nginx", "kill -9 $(pgrep -f process)",
  "find / -name '*.conf'", "crontab -l", "netstat -tlnp", "iptables -L -n",
  "iostat -x 1 5", "lsof -i :8080", "du -sh /var/log/*", "watch -n 2 docker ps",
  "tail -f /var/log/syslog", "journalctl -u docker", "awk '{print $1}' access.log",
  "sed -i 's/old/new/g' config.conf", "nc -zv localhost 80", "aws ec2 describe-instances",
  "docker stats --no-stream", "curl -o /dev/null -s -w '%{time_total}' example.com"
];

// Real-world Linux system configuration commands (Basic to Advanced)
const SYSTEM_COMMANDS = [
  // User & Permission Management
  "whoami", "id", "id -u", "id -g", "who", "w", "echo $USER", "echo $HOME",
  "useradd -m john", "useradd -d /home/devuser devuser", "useradd -s /bin/bash john",
  "useradd -u 2001 john", "useradd -G sudo -c 'Dev User' john", "adduser john",
  "userdel john", "userdel -r john", "passwd john", "passwd -l john", "passwd -u john",
  "passwd -d john", "passwd -e john", "passwd -S john",
  "su john", "su - john", "sudo su", "sudo -i", "sudo -l", "sudo visudo",
  "chmod 755 script.sh", "chmod +x deploy.sh", "chown user:group file",
  "chgrp developers file", "usermod -aG docker john", "usermod -l newname john",
  "usermod -d /home/newhome john", "usermod -s /bin/zsh john", "usermod -L john",
  "usermod -U john", "usermod -e 2027-01-01 john",
  "groupadd developers", "groupdel developers", "groupmod -n devs developers",
  "gpasswd -a john developers", "gpasswd -d john developers", "groups john",
  "chage -l john", "chage -M 90 john", "chage -m 7 john", "chage -W 14 john",
  "chage -E 2027-01-01 john", "setfacl -m u:john:rw file", "getfacl file",
  // Package Management
  "apt install nginx", "apt remove nginx", "apt update && apt upgrade",
  "dpkg -l", "rpm -qa", "apt-cache policy nginx", "apt-mark hold nginx",
  "dnf install nginx", "yum install nginx", "dnf list installed", "snap list",
  "flatpak list", "./configure && make && make install",
  // Networking
  "ip a", "ifconfig", "ping -c 4 google.com", "traceroute google.com",
  "nslookup example.com", "dig example.com", "nmcli device status", "nmcli con show",
  "netstat -tulpn", "ss -tulpn", "iptables -L -n", "nft list ruleset",
  "firewall-cmd --list-all", "ufw status verbose", "ufw allow 22/tcp",
  "tcpdump -i eth0", "tshark -i eth0",
  // Disk & Filesystem
  "df -h", "du -sh /var", "mount /dev/sdb1 /mnt", "umount /mnt", "cat /etc/fstab",
  "fdisk -l", "parted /dev/sda print", "lsblk", "mkfs.ext4 /dev/sdb1",
  "mkfs.xfs /dev/sdb1", "pvcreate /dev/sdb1", "vgcreate vg0 /dev/sdb1",
  "lvcreate -L 10G -n lvdata vg0", "mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1",
  "fsck /dev/sdb1",
  // Process & Service Management
  "ps aux", "ps -u john", "top", "htop", "kill 1234", "killall nginx",
  "pgrep -f process", "pkill -u john", "nice -n 10 task", "renice 5 -p 1234",
  "systemctl start nginx", "systemctl stop nginx", "systemctl enable nginx",
  "systemctl disable nginx", "systemctl mask service", "systemctl status nginx",
  "journalctl -u nginx", "journalctl -f", "crontab -e", "crontab -l",
  // System Info & Monitoring
  "uname -a", "uptime", "free -h", "lscpu", "lsusb", "lspci", "vmstat 1 5",
  "iostat -x 1 5", "dmesg | tail", "sar -u 1 5", "strace -p 1234", "ltrace -p 1234",
  // Kernel & Advanced System Tuning
  "sysctl -a", "sysctl -w vm.swappiness=10", "ulimit -n", "modprobe nf_conntrack",
  "lsmod", "rmmod module", "grub-mkconfig -o /boot/grub/grub.cfg", "getenforce",
  "setenforce 0", "aa-status", "chroot /mnt", "cat /etc/default/grub",
  // User Management: Important Files & Lookups
  "cat /etc/passwd", "cut -d: -f1 /etc/passwd", "cat /etc/shadow", "cat /etc/group",
  "cat /etc/gshadow", "cat /etc/login.defs", "cat /etc/default/useradd", "cat /etc/sudoers",
  "ls /etc/skel", "getent passwd john", "getent group developers", "finger john",
  "pinky john", "newusers users.txt", "chpasswd", "pwck", "grpck", "pwconv",
  "pwunconv", "newgrp developers", "sg developers", "groupmems -g developers -a john",
  "faillock --user john --reset", "pam_tally2 --user john --reset",
  "chsh -s /bin/zsh john", "chfn john", "logname", "ls /etc/pam.d/",
  "cat /etc/ssh/sshd_config", "umask 022", "setfacl -m u:john:rwx /data",
  "getfacl /data", "ausearch -m USER_LOGIN", "journalctl -u sshd", "last",
  "lastb", "lastlog", "users", "loginctl list-sessions"
];

// ============================================================
//  Keyboard layouts (KLE format) - from kbs.im (MIT licensed)
// ============================================================
const keyPresets = [
    {
      key: "9009_wkltkl",
      caption: "9009 WKL TKL",
      kle: `[{c:"#bcb59f",t:"#383537"},"Esc",{x:1,c:"#ddd7cb"},"F1","F2","F3","F4",{x:0.5,c:"#bcb59f"},"F5","F6","F7","F8",{x:0.5,c:"#ddd7cb"},"F9","F10","F11","F12",{x:0.2,c:"#bcb59f"},"PrtSc","Scroll Lock","Pause\\nBreak"],
            [{y:0.19,c:"#ddd7cb"},"~\\n\`","!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#bcb59f",w:2},"Backspace",{x:0.2},"Insert","Home","PgUp"],
            [{w:1.5},"Tab",{c:"#ddd7cb"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{x:0.2,c:"#bcb59f"},"Delete","End","PgDn"],
            [{w:1.75},"Caps Lock",{c:"#ddd7cb"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#bcb59f",w:2.25},"Enter"],
            [{w:2.25},"Shift",{c:"#ddd7cb"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#bcb59f",w:2.75},"Shift",{x:1.2},"↑"],
            [{w:1.5},"Ctrl",{x:1,w:1.5},"Alt",{c:"#ddd7cb",a:7,w:7},"",{c:"#bcb59f",a:4,w:1.5},"Alt",{x:1,w:1.5},"Ctrl",{x:0.2},"←","↓","→"]`
    },
    {
      key: "oblivion_fullsize",
      caption: "Oblivion Fullsize",
      kle: `[{c:"#4d4d4d",t:"#d64827"},"Esc",{x:1,c:"#d7d6d2",t:"#000000"},"F1","F2","F3","F4",{x:0.5,c:"#4d4d4d",t:"#b7b2a6"},"F5","F6","F7","F8",{x:0.5,c:"#d7d6d2",t:"#000000"},"F9","F10","F11","F12",{x:0.25,c:"#4d4d4d",t:"#b7b2a6"},"PrtSc","Scroll Lock","Pause\\nBreak"],
            [{y:0.25,c:"#d7d6d2",t:"#4d4d4d"},"~\\n\`","!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#4d4d4d",t:"#9b91b5",w:2},"Backspace",{x:0.25,t:"#b7b2a6"},"Insert","Home","PgUp",{x:0.25,t:"#d64827"},"Num Lock",{t:"#b7b2a6"},"/","*","-"],
            [{t:"#9b91b5",w:1.5},"Tab",{c:"#d7d6d2",t:"#4d4d4d"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{x:0.25,c:"#4d4d4d",t:"#b7b2a6"},"Delete","End","PgDn",{x:0.25,c:"#d7d6d2",t:"#4d4d4d"},"7\\nHome","8\\n↑","9\\nPgUp",{c:"#4d4d4d",t:"#b7b2a6",h:2},"+"],
            [{t:"#8ead53",w:1.75},"Caps Lock",{c:"#d7d6d2",t:"#4d4d4d"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#4d4d4d",t:"#8ead53",w:2.25},"Enter",{x:3.5,c:"#d7d6d2",t:"#4d4d4d"},"4\\n←","5","6\\n→"],
            [{c:"#4d4d4d",t:"#f4962d",w:2.25},"Shift",{c:"#d7d6d2",t:"#4d4d4d"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#4d4d4d",t:"#f4962d",w:2.75},"Shift",{x:1.25,t:"#b7b2a6"},"↑",{x:1.25,c:"#d7d6d2",t:"#4d4d4d"},"1\\nEnd","2\\n↓","3\\nPgDn",{c:"#4d4d4d",t:"#8ead53",h:2},"Enter"],
            [{t:"#2a82ad",w:1.25},"Ctrl",{t:"#d64827",w:1.25},"Win",{t:"#2a82ad",w:1.25},"Alt",{c:"#d7d6d2",t:"#4d4d4d",a:7,w:6.25},"",{c:"#4d4d4d",t:"#2a82ad",a:4,w:1.25},"Alt",{t:"#d64827",w:1.25},"Win",{t:"#2a82ad",w:1.25},"Menu",{w:1.25},"Ctrl",{x:0.25,t:"#b7b2a6"},"←","↓","→",{x:0.25,c:"#d7d6d2",t:"#4d4d4d",w:2},"0\\nIns",".\\nDel"]`
    },
    {
      key: "mizu_19x",
      caption: "Mizu KBD19X",
      kle: `[{c:"#f8f7f3",t:"#243746"},"Esc",{x:0.25,c:"#b7d8eb"},"F1","F2","F3","F4",{x:0.25,c:"#243746",t:"#f8f7f3"},"F5","F6","F7","F8",{x:0.25,c:"#b7d8eb",t:"#243746"},"F9","F10","F11","F12",{x:0.25,c:"#243746",t:"#f8f7f3"},"Delete",{x:0.5},"PrtSc","Pause\\nBreak","Insert","Home"],
      [{y:0.25,c:"#b7d8eb",t:"#243746"},"~\\n\`",{t:"#000000"},"!\\n1",{t:"#243746"},"@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#243746",t:"#f8f7f3",w:2},"Backspace",{x:0.5},"Num Lock","/","*","-"],
      [{w:1.5},"Tab",{c:"#b7d8eb",t:"#243746"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{x:0.5},"7\\nHome","8\\n↑","9\\nPgUp",{c:"#243746",t:"#f8f7f3",h:2},"+"],
      [{w:1.75},"Caps Lock",{c:"#b7d8eb",t:"#243746"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#f8f7f3",t:"#000000",w:2.25},"Enter",{x:0.5,c:"#b7d8eb",t:"#243746"},"4\\n←","5","6\\n→"],
      [{c:"#243746",t:"#f8f7f3",w:2.25},"Shift",{c:"#b7d8eb",t:"#243746"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#243746",t:"#f8f7f3",w:1.75},"Shift",{x:1.5,c:"#b7d8eb",t:"#243746"},"1\\nEnd","2\\n↓","3\\nPgDn",{c:"#f8f7f3",t:"#000000",h:2},"Enter"],
      [{y:-0.75,x:14.25},"↑"],
      [{y:-0.25,c:"#243746",t:"#f8f7f3",w:1.25},"Ctrl","Win",{w:1.25},"Alt",{c:"#f8f7f3",t:"#000000",a:7,w:6.25},"",{c:"#243746",t:"#f8f7f3",a:4},"Alt","Win",{w:1.25},"Ctrl",{x:3.5,c:"#b7d8eb",t:"#243746"},"0\\nIns",".\\nDel"],
      [{y:-0.75,x:13.25,c:"#f8f7f3",t:"#000000"},"←","↓","→"]`,
    },
    {
      key: "modo_wkltkl",
      caption: "MoDo WKL TKL",
      kle: `[{c:"#d36a7b",t:"#e8e8e8"},"Esc",{x:1,c:"#82878d"},"F1","F2","F3","F4",{x:0.5,c:"#515459"},"F5","F6","F7","F8",{x:0.5,c:"#82878d"},"F9","F10","F11","F12",{x:0.25,c:"#515459"},"PrtSc","Scroll Lock","Pause\\nBreak"],
      [{y:0.25},"~\\n\`",{c:"#82878d"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#515459",w:2},"Backspace",{x:0.25},"Insert","Home","PgUp"],
      [{w:1.5},"Tab",{c:"#82878d"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{c:"#515459",w:1.5},"|\\n\\\\",{x:0.25},"Delete","End","PgDn"],
      [{w:1.75},"Caps Lock",{c:"#82878d"},"A","S","D","F","G","H","J","K","L",":\\n;","\\\"\\n'",{c:"#d36a7b",w:2.25},"Enter"],
      [{c:"#515459",w:2.25},"Shift",{c:"#82878d"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#515459",w:1.75},"Shift","Fn",{x:1.25},"↑"],
      [{w:1.5},"Ctrl",{x:1,w:1.5},"Alt",{c:"#d36a7b",a:7,w:7},"",{c:"#515459",a:4,w:1.5},"Alt",{x:1,w:1.5},"Ctrl",{x:0.25},"←","↓","→"]`,
    },
    {
      key: "dracula_tkl",
      caption: "Dracula TKL",
      kle: `[{c:"#bd93f9",t:"#282a36"},"Esc",{x:1,c:"#44475a",t:"#f8f8f2"},"F1","F2","F3","F4",{x:0.5,c:"#282a36"},"F5","F6","F7","F8",{x:0.5,c:"#44475a"},"F9","F10","F11","F12",{x:0.25,c:"#282a36"},"PrtSc","Scroll Lock","Pause\\nBreak"],
      [{y:0.25},"~\\n\`",{c:"#44475a"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#282a36",t:"#ff79c6",w:2},"Backspace",{x:0.25,t:"#f8f8f2"},"Insert","Home","PgUp"],
      [{t:"#ff79c6",w:1.5},"Tab",{c:"#44475a",t:"#f8f8f2"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{c:"#282a36",w:1.5},"|\\n\\\\",{x:0.25},"Delete","End","PgDn"],
      [{t:"#bd93f9",w:1.75},"Caps Lock",{c:"#44475a",t:"#f8f8f2"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#bd93f9",t:"#282a36",w:2.25},"Enter"],
      [{c:"#282a36",t:"#8be9fd",w:2.25},"Shift",{c:"#44475a",t:"#f8f8f2"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#282a36",t:"#8be9fd",w:2.75},"Shift",{x:1.25,c:"#f8f8f2",t:"#282a36"},"↑"],
      [{c:"#282a36",t:"#f1fa8c",w:1.5},"Ctrl",{t:"#ff79c6"},"Win",{t:"#bd93f9",w:1.5},"Alt",{c:"#bd93f9",t:"#f8f8f2",a:7,w:7},"",{c:"#282a36",t:"#bd93f9",a:4,w:1.5},"Alt",{t:"#ff79c6"},"Win",{t:"#f1fa8c",w:1.5},"Ctrl",{x:0.25,c:"#ff79c6",t:"#282a36"},"←",{c:"#bd93f9"},"↓",{c:"#8be9fd"},"→"]`,
    },
    {
      key: "laser_75",
      caption: "Laser 75%",
      kle: `[{c:"#ce234e",t:"#26204b",a:6},"Esc",{c:"#2f1c75",t:"#00a2b0"},"F1","F2","F3","F4",{c:"#26204b",t:"#ce234e"},"F5","F6","F7","F8",{c:"#2f1c75",t:"#00a2b0"},"F9","F10","F11","F12",{c:"#26204b",t:"#ce234e",a:5},"PrtSc\\nNmLk","Pause\\nScrLk","Delete\\nInsert"],
            [{c:"#2f1c75",t:"#00a2b0",a:4},"~\\n\`","!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#26204b",t:"#ce234e",a:6,w:2},"Backspace","Home"],
            [{a:4,w:1.5},"Tab",{c:"#2f1c75",t:"#00a2b0"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{c:"#26204b",t:"#ce234e",a:6},"PgUp"],
            [{a:4,w:1.75},"Caps Lock",{c:"#2f1c75",t:"#00a2b0"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#26204b",t:"#ce234e",a:6,w:2.25},"Enter","PgDn"],
            [{w:2.25},"Shift",{c:"#2f1c75",t:"#00a2b0",a:4},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#26204b",t:"#ce234e",a:6,w:1.75},"Shift",{c:"#ce234e",t:"#26204b",a:7},"↑",{c:"#26204b",t:"#ce234e",a:6},"End"],
            [{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{c:"#ce234e",t:"#26204b",a:7,w:6.25},"",{c:"#26204b",t:"#ce234e",a:6},"Alt","Fn","Ctrl",{c:"#ce234e",t:"#26204b",a:7},"←","↓","→"]`,
    },
    {
      key: "olivia_wkl75",
      caption: "Olivia WKL 75%",
      kle: `[{c:"#f1beb0",t:"#2b2b2b"},"Esc",{x:0.5,c:"#e1dbd1"},"F1","F2","F3","F4",{x:0.5,c:"#2b2b2b",t:"#f1beb0"},"F5","F6","F7","F8",{x:0.5,c:"#e1dbd1",t:"#2b2b2b"},"F9","F10","F11","F12",{x:0.5,c:"#2b2b2b",t:"#f1beb0"},"Delete"],
            [{y:0.25},"~\\n\`",{c:"#e1dbd1",t:"#2b2b2b"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#2b2b2b",t:"#f1beb0",w:2},"Backspace","Home"],
            [{w:1.5},"Tab",{c:"#e1dbd1",t:"#2b2b2b"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{c:"#2b2b2b",t:"#f1beb0",w:1.5},"|\\n\\\\","PgUp"],
            [{w:1.75},"Caps Lock",{c:"#e1dbd1",t:"#2b2b2b"},"A","S","D",{n:true},"F","G","H",{n:true},"J","K","L",":\\n;","\\\"\\n'",{c:"#2b2b2b",t:"#f1beb0",w:2.25},"Enter","PgDn"],
            [{w:2.25},"Shift",{c:"#e1dbd1",t:"#2b2b2b"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#2b2b2b",t:"#f1beb0",w:1.75},"Shift",{c:"#f1beb0",t:"#2b2b2b"},"↑",{c:"#2b2b2b",t:"#f1beb0"},"End"],
            [{w:1.5},"Ctrl",{x:0.75,w:1.55},"Alt",{x:-0.05,c:"#f1beb0",t:"#000000",a:7,w:7},"",{c:"#2b2b2b",t:"#f1beb0",a:4,w:1.5},"Win",{x:0.75,c:"#f1beb0",t:"#2b2b2b"},"←","↓","→"]`,
    },
    {
      key: "cafe_65",
      caption: "Cafe 65%",
      kle: `[{c:"#dec19b",t:"#3f3a37",a:6},"Esc",{c:"#cfcfc5",a:4},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#3f3a37",t:"#cfcfc5",a:6,w:2},"Backspace",{a:4},"~\\n\`"],
            [{w:1.5},"Tab",{c:"#cfcfc5",t:"#3f3a37"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{c:"#3f3a37",t:"#cfcfc5",a:6},"Delete"],
            [{a:4,w:1.75},"Caps Lock",{c:"#cfcfc5",t:"#3f3a37"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#3f3a37",t:"#cfcfc5",a:6,w:2.25},"Enter","PgUp"],
            [{w:2.25},"Shift",{c:"#cfcfc5",t:"#3f3a37",a:4},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#3f3a37",t:"#cfcfc5",a:6,w:1.75},"Shift",{c:"#dec19b",t:"#3f3a37",a:7},"↑",{c:"#3f3a37",t:"#cfcfc5",a:6},"PgDn"],
            [{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{c:"#dec19b",t:"#3f3a37",a:7,w:6.25},"",{c:"#3f3a37",t:"#cfcfc5",a:6},"Alt","Fn","Ctrl",{c:"#dec19b",t:"#3f3a37",a:7},"←","↓","→"]`,
    },
    {
      key: "8008_wkl65",
      caption: "8008 WKL 65%",
      kle: `[{c:"#fe588c"},"Esc",{c:"#9ba7b7",t:"#3f4754"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=","|\\n\\\\","~\\n\`",{c:"#3f4754",t:"#fe588c"},"Delete"],
            [{w:1.5},"Tab",{c:"#9ba7b7",t:"#3f4754"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{c:"#3f4754",t:"#fe588c",w:1.5},"Backspace","PgUp"],
            [{w:1.75},"Caps Lock",{c:"#9ba7b7",t:"#3f4754"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#fe588c",t:"#000000",w:2.25},"Enter",{c:"#3f4754",t:"#fe588c"},"PgDn"],
            [{w:2.25},"Shift",{c:"#9ba7b7",t:"#3f4754"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#3f4754",t:"#fe588c",w:1.75},"Shift","↑","Fn"],
            [{w:1.5},"Ctrl",{x:0.75,w:1.5},"Alt",{c:"#fe588c",t:"#000000",a:7,w:7},"",{c:"#3f4754",t:"#fe588c",a:4,w:1.5},"Win",{x:0.75},"←","↓","→"]`,
    },
    {
      key: "modelm",
      caption: "Model M",
      kle: `[{c:"#b9afa3"},"Esc",{x:1,c:"#fdf5f3"},"F1","F2","F3","F4",{x:0.5,c:"#b9afa3"},"F5","F6","F7","F8",{x:0.5,c:"#fdf5f3"},"F9","F10","F11","F12",{x:0.25,c:"#b9afa3"},"PrtSc","Scroll Lock","Pause\\nBreak"],
            [{y:1,c:"#fdf5f3"},"~\\n\`","!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=",{c:"#b9afa3",w:2},"Backspace",{x:0.25},"Insert","Home","PgUp",{x:0.25},"Num Lock","/","*","-"],
            [{w:1.5},"Tab",{c:"#fdf5f3"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{x:0.25,c:"#b9afa3"},"Delete","End","PgDn",{x:0.25,c:"#fdf5f3"},"7\\nHome","8\\n↑","9\\nPgUp",{c:"#b9afa3",h:2},"+"],
            [{w:1.75},"Caps Lock",{c:"#fdf5f3"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#b9afa3",w:2.25},"Enter",{x:3.5,c:"#fdf5f3"},"4\\n←","5","6\\n→"],
            [{c:"#b9afa3",w:2.25},"Shift",{c:"#fdf5f3"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#b9afa3",w:2.75},"Shift",{x:1.25},"↑",{x:1.25,c:"#fdf5f3"},"1\\nEnd","2\\n↓","3\\nPgDn",{c:"#b9afa3",h:2},"Enter"],
            [{w:1.5},"Ctrl",{x:1,w:1.5},"Alt",{c:"#fdf5f3",a:7,w:7},"",{c:"#b9afa3",a:4,w:1.5},"Alt",{x:1,w:1.5},"Ctrl",{x:0.25},"←","↓","→",{x:0.25,c:"#fdf5f3",w:2},"0\\nIns",".\\nDel"]`,
    },
    {
      key: "handarbeit_wklfull",
      caption: "Handarbeit WKL Fullsize",
      kle: `[{c:"#af3021",t:"#def1ed"},"Esc",{x:1,c:"#2257bd"},"F1","F2","F3","F4",{x:0.5,c:"#d9b7b9"},"F5","F6","F7","F8",{x:0.5,c:"#edbe26"},"F9","F10","F11","F12",{x:0.25,c:"#337c3a"},"PrtSc","Scroll Lock","Pause\\nBreak"],
            [{y:0.25,c:"#af3021"},"~\\n\`",{c:"#83be24"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0",{c:"#af3021"},"_\\n-","+\\n=",{c:"#6b4195",w:2},"Backspace",{x:0.25,c:"#edbe26"},"Insert",{c:"#83be24"},"Home",{c:"#af3021"},"PgUp",{x:0.25,c:"#edbe26"},"Num Lock","/","*","-"],
            [{c:"#6b4195",w:1.5},"Tab",{c:"#af3021"},"Q","W","E","R","T","Y","U","I","O","P",{c:"#2257bd"},"{\\n[","}\\n]",{w:1.5},"|\\n\\\\",{x:0.25,c:"#edbe26"},"Delete",{c:"#83be24"},"End",{c:"#af3021"},"PgDn",{x:0.25,c:"#6b4195"},"7\\nHome","8\\n↑","9\\nPgUp",{c:"#d9b7b9",h:2},"+"],
            [{c:"#6b4195",w:1.75},"Caps Lock",{c:"#af3021"},"A","S","D",{c:"#edbe26"},"F",{c:"#af3021"},"G","H",{c:"#edbe26"},"J",{c:"#af3021"},"K","L",{c:"#2257bd"},":\\n;","\\"\\n'",{c:"#edbe26",w:2.25},"Enter",{x:3.5,c:"#6b4195"},"4\\n←",{c:"#af3021"},"5",{c:"#6b4195"},"6\\n→"],
            [{w:2.25},"Shift",{c:"#af3021"},"Z","X","C","V","B","N","M","<\\n,",{c:"#2257bd"},">\\n.","?\\n/",{c:"#6b4195",w:2.75},"Shift",{x:1.25,c:"#edbe26"},"↑",{x:1.25,c:"#6b4195"},"1\\nEnd","2\\n↓","3\\nPgDn",{c:"#b8d5b3",h:2},"Enter"],
            [{c:"#af3021",w:1.5},"Ctrl",{x:1,w:1.5},"Alt",{c:"#edbe26",a:7,w:7},"",{c:"#af3021",a:4,w:1.25},"Alt",{x:1.25,w:1.5},"Ctrl",{x:0.25,c:"#db7d28"},"←",{c:"#83be24"},"↓",{c:"#db7d28"},"→",{x:0.25,c:"#af3021",w:2},"0\\nIns",{c:"#19768d"},".\\nDel"]`
    },
    {
      key: "hhkb",
      caption: "HHKB",
      kle: `[{c:"#b2b3b5"},"Esc",{c:"#cbc8c3"},"!\\n1","@\\n2","#\\n3","$\\n4","%\\n5","^\\n6","&\\n7","*\\n8","(\\n9",")\\n0","_\\n-","+\\n=","|\\n\\\\","~\\n\`"],
            [{c:"#b2b3b5", w:1.5},"Tab",{c:"#cbc8c3"},"Q","W","E","R","T","Y","U","I","O","P","{\\n[","}\\n]",{c:"#b2b3b5",w:1.5},"Backspace"],
            [{w:1.75},"Ctrl",{c:"#cbc8c3"},"A","S","D","F","G","H","J","K","L",":\\n;","\\"\\n'",{c:"#b2b3b5",w:2.25},"Enter"],
            [{w:2.25},"Shift",{c:"#cbc8c3"},"Z","X","C","V","B","N","M","<\\n,",">\\n.","?\\n/",{c:"#b2b3b5",w:1.75},"Shift","Fn"],
            [{x:1.5},"Alt",{w:1.5},"Win",{c:"#cbc8c3",a:7,w:6},"",{c:"#b2b3b5",a:4,w:1.5},"Win","Alt"]`,
    }
];

// ============================================================
//  Keyboard case colors
// ============================================================
const keyboardColors = [
  {
    color: "gray",
    caption: "Gray",
    background: "linear-gradient(137deg, rgba(182,186,185,1) 0%, rgba(178,178,178,1) 75%)",
  },
  {
    color: "black",
    caption: "Black",
    background: "linear-gradient(360deg, rgba(65,65,65,1) 0%, rgba(42,42,42,1) 75%)",
  },
  {
    color: "silver",
    caption: "Silver",
    background: "linear-gradient(360deg, rgba(227,236,242,1) 0%, rgba(211,216,219,1) 75%)",
  },
  {
    color: "white",
    caption: "White",
    background: "linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(236,236,236,1) 75%)",
  },
  {
    color: "beige",
    caption: "Beige",
    background: "linear-gradient(360deg, rgba(239,228,226,1) 0%, rgba(221,213,212,1) 75%)",
  },
  {
    color: "rosegold",
    caption: "Rose Gold",
    background: "linear-gradient(360deg, rgba(249,187,172,1) 0%, rgba(231,175,161,1) 75%)",
  },
  {
    color: "lightgold",
    caption: "Light Gold",
    background: "linear-gradient(360deg, rgba(229,206,152,1) 0%, rgba(213,191,141,1) 75%)",
  },
];

// ============================================================
//  Mechanical switch sound profiles (synthesized)
// ============================================================
const switchList = [
  { key: "cream",    caption: "NovelKeys Creams" },
  { key: "holypanda", caption: "Holy Pandas" },
  { key: "alpaca",   caption: "Alpacas" },
  { key: "tealios",  caption: "Turquoise Tealios" },
  { key: "inkblack", caption: "Gateron Black Inks" },
  { key: "inkred",   caption: "Gateron Red Inks" },
  { key: "mxblack",  caption: "Cherry MX Blacks" },
  { key: "mxbrown",  caption: "Cherry MX Browns" },
  { key: "mxblue",   caption: "Cherry MX Blues" },
  { key: "boxnavy",  caption: "Kailh Box Navies" },
  { key: "buckling", caption: "Buckling Spring" },
  { key: "alpsblue", caption: "SKCM Blue Alps" },
  { key: "topre",    caption: "Topre" },
];

// synthesized sound characteristics per switch
const switchProfiles = {
  cream:     { click: 0.0, freq: 1400, filter: 1800, q: 2.0, dur: 0.055, gain: 0.55 },
  holypanda: { click: 0.15, freq: 900, filter: 1100, q: 3.0, dur: 0.065, gain: 0.6 },
  alpaca:    { click: 0.05, freq: 1200, filter: 1600, q: 2.0, dur: 0.05, gain: 0.5 },
  tealios:   { click: 0.02, freq: 1300, filter: 1700, q: 1.8, dur: 0.048, gain: 0.5 },
  inkblack:  { click: 0.08, freq: 700, filter: 900, q: 3.5, dur: 0.07, gain: 0.62 },
  inkred:    { click: 0.05, freq: 1000, filter: 1400, q: 2.5, dur: 0.055, gain: 0.55 },
  mxblack:   { click: 0.12, freq: 800, filter: 1000, q: 3.0, dur: 0.06, gain: 0.6 },
  mxbrown:   { click: 0.3, freq: 950, filter: 1300, q: 2.5, dur: 0.06, gain: 0.6 },
  mxblue:    { click: 0.75, freq: 1600, filter: 2400, q: 4.0, dur: 0.05, gain: 0.68 },
  boxnavy:   { click: 0.85, freq: 2000, filter: 2800, q: 4.5, dur: 0.055, gain: 0.72 },
  buckling:  { click: 0.9, freq: 2200, filter: 3000, q: 4.5, dur: 0.06, gain: 0.72 },
  alpsblue:  { click: 0.7, freq: 1700, filter: 2500, q: 4.0, dur: 0.05, gain: 0.7 },
  topre:     { click: 0.25, freq: 600, filter: 750, q: 4.0, dur: 0.08, gain: 0.58 },
};

// ============================================================
//  Linux & DevOps interview Q&A typing passages
// ============================================================
const interviewQA = {
  "Linux": [
    {
      q: "What is the difference between a process and a thread?",
      a: "A process is an independent program in execution with its own memory space. A thread is a lightweight unit of execution within a process that shares the process memory space and resources. Threads are faster to create and context switch than processes."
    },
    {
      q: "What is the Linux filesystem hierarchy?",
      a: "The filesystem hierarchy starts at the root directory which is a single forward slash. Important directories include bin for user binaries, etc for configuration files, var for variable data like logs, and home for user home directories."
    },
    {
      q: "How do you check disk usage in Linux?",
      a: "The df command reports the free and used disk space on mounted filesystems. The du command estimates file and directory space usage. Combining them with the human readable flag shows output in readable units like megabytes and gigabytes."
    },
    {
      q: "What is a daemon process in Linux?",
      a: "A daemon is a background process that runs without direct user interaction. Daemons are typically started at boot time and provide services such as web serving or logging. They are usually named with a trailing d like sshd or nginx."
    },
    {
      q: "How do you manage Linux service startup?",
      a: "The systemctl command is the primary tool for managing services. Systemctl enable makes a service start at boot while systemctl start starts it immediately. Journalctl reads the service logs collected by the systemd journal."
    },
    {
      q: "What is the Linux kernel?",
      a: "The kernel is the core component of the operating system that manages hardware and system resources. It handles process scheduling, memory management and device drivers. The kernel is the link between the application layer and the physical hardware."
    },
    {
      q: "What are Linux file permissions?",
      a: "Every file has read, write and execute permissions for the owner, group and others. Permissions are represented by the rwx notation or a three digit octal number. The chmod command changes permissions while chown changes the owner and group."
    },
    {
      q: "What is the difference between a hard link and a symbolic link?",
      a: "A hard link points to the same inode as the original file and cannot cross filesystems. A symbolic link stores the path to the target file and can link to directories. Deleting the original file breaks a symbolic link but not a hard link."
    },
    {
      q: "What is swap space in Linux?",
      a: "Swap space is disk space used as virtual memory when physical memory is full. The kernel moves inactive pages to swap to free RAM for active processes. Swap is configured at installation and can be managed with the mkswap and swapon commands."
    },
    {
      q: "How do you check running processes in Linux?",
      a: "The ps command lists running processes with their process IDs and states. The top command shows real time process activity and resource usage. The kill command sends signals to terminate or control processes by their process ID."
    },
    {
      q: "What is a zombie process?",
      a: "A zombie process is a process that has finished execution but still has an entry in the process table. This happens when the parent process has not yet read the child exit status. Zombies cannot be killed and are reaped when the parent is cleaned up."
    },
    {
      q: "What is the difference between grep and find?",
      a: "The find command searches the filesystem for files by name, type or modification time. The grep command searches inside file contents for matching text patterns. Find locates files while grep extracts lines that match a regular expression."
    },
    {
      q: "What does the chmod 755 permission set mean?",
      a: "The number seven five five grants full read, write and execute rights to the owner. Group and other users only get read and execute rights. Execute permission means a file can be run as a program or script."
    },
    {
      q: "How do you monitor system performance in Linux?",
      a: "The top and htop commands show live CPU, memory and process usage. The free command reports memory utilization while df and iostat report disk usage. The vmstat command gives a summary of system activity over time."
    }
  ],
  "Docker": [
    {
      q: "What is the difference between a container and a virtual machine?",
      a: "A container shares the host operating system kernel and packages only the application and its dependencies. A virtual machine runs a full operating system on virtualized hardware with a hypervisor. Containers are lighter and start faster but provide weaker isolation than virtual machines."
    },
    {
      q: "What is the difference between a Docker image and a container?",
      a: "A Docker image is an immutable read only template that defines the application environment. A container is a running instance created from an image. Images are built from Dockerfiles and stored in registries while containers are created by running an image."
    },
    {
      q: "How does a Dockerfile work?",
      a: "A Dockerfile is a text file containing instructions that build an image layer by layer. The FROM instruction selects a base image and the COPY instruction adds files. Each instruction creates a layer that can be cached so rebuilds are fast."
    },
    {
      q: "What is Docker Compose used for?",
      a: "Docker Compose defines and runs multi container applications using a YAML configuration file. Services, networks and volumes are declared in the compose file. A single command brings up all the services together in their defined order."
    },
    {
      q: "How do you persist data in Docker?",
      a: "Data is persisted using volumes and bind mounts. A named volume is managed by Docker and stored in its data directory. A bind mount maps a host directory into the container. Both survive container removal so data is not lost."
    },
    {
      q: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
      a: "CMD provides default arguments that can be overridden when the container is started. ENTRYPOINT defines the executable that runs and is harder to override. Combining an entrypoint with cmd arguments gives a configurable default command."
    },
    {
      q: "What is the difference between COPY and ADD in a Dockerfile?",
      a: "The COPY instruction copies files from the build context into the image. The ADD instruction does the same but also supports remote URLs and automatic tar extraction. COPY is preferred because ADD has hidden behaviors that can cause unexpected results."
    },
    {
      q: "How do you reduce Docker image size?",
      a: "Use a minimal base image like Alpine and combine run commands into fewer layers. Remove package managers and temporary files inside the same layer. Multi-stage builds copy only build output into the final slim image."
    },
    {
      q: "What is a multi-stage build in Docker?",
      a: "A multi-stage build uses several FROM statements in one Dockerfile. Earlier stages compile or build the application and the final stage copies only the needed artifacts. This keeps the production image small without a large toolchain."
    },
    {
      q: "How do you debug a running container?",
      a: "The docker logs command shows the standard output and error from the container. The docker exec command runs a shell or command inside the running container. Inspecting the container with docker inspect reveals configuration and runtime details."
    },
    {
      q: "What are Docker health checks?",
      a: "A health check tells Docker how to test if a container is working correctly. The HEALTHCHECK instruction in a Dockerfile runs a command at a set interval. Docker reports the container as unhealthy when the check fails repeatedly."
    },
    {
      q: "How does Docker networking work?",
      a: "Docker provides bridge, host and overlay network drivers. The default bridge network allows containers on the same host to communicate. Overlay networks connect containers across multiple hosts in a swarm or cluster."
    },
    {
      q: "How do you clean up Docker resources?",
      a: "The docker system prune command removes stopped containers, unused networks and dangling images. The docker image prune command removes unused images while docker volume prune removes unused volumes. Adding the all flag removes unused resources as well."
    },
    {
      q: "What is the difference between Docker run and docker create?",
      a: "The docker run command creates and starts a new container from an image in one step. The docker create command creates a container without starting it. A created container can be started later with the docker start command."
    }
  ],
  "Kubernetes": [
    {
      q: "What is a Kubernetes pod?",
      a: "A pod is the smallest deployable unit in Kubernetes and wraps one or more containers. Containers in a pod share networking and storage resources. Kubernetes manages pods rather than individual containers and each pod gets its own IP address."
    },
    {
      q: "What is the difference between a Deployment and a StatefulSet?",
      a: "A Deployment manages stateless applications with identical interchangeable replicas. A StatefulSet manages stateful applications where each replica needs stable identity and storage. StatefulSet pods are created in order and have stable network names."
    },
    {
      q: "What is a Kubernetes service?",
      a: "A service is an abstraction that provides a stable network endpoint for a set of pods. It load balances traffic across the pods selected by its label selector. ClusterIP exposes the service inside the cluster while LoadBalancer exposes it externally."
    },
    {
      q: "How does Kubernetes handle scaling?",
      a: "The Horizontal Pod Autoscaler scales the number of replicas based on observed CPU or memory usage. The desired replica count is set on the deployment and maintained by the replication controller. New pods are scheduled onto nodes with available resources."
    },
    {
      q: "What is a ConfigMap in Kubernetes?",
      a: "A ConfigMap stores configuration data as key value pairs separate from the container image. This lets configuration change without rebuilding images. ConfigMaps are mounted into pods as files or exposed as environment variables."
    },
    {
      q: "What is a Kubernetes namespace?",
      a: "A namespace is a logical partition inside a cluster used to separate resources. Namespaces isolate environments like development, staging and production. Resources in one namespace cannot be referenced by short name from another namespace."
    },
    {
      q: "What is a DaemonSet in Kubernetes?",
      a: "A DaemonSet ensures that a copy of a pod runs on every node in the cluster. It is used for cluster level tasks like log collection and monitoring agents. New nodes automatically get a DaemonSet pod when they join the cluster."
    },
    {
      q: "What are liveness and readiness probes?",
      a: "A liveness probe checks if a container is still running and restarts it if the check fails. A readiness probe checks if a pod is ready to accept traffic. Readiness failures remove the pod from service endpoints while liveness failures restart the container."
    },
    {
      q: "What is a PersistentVolumeClaim in Kubernetes?",
      a: "A PersistentVolumeClaim requests storage from the cluster on behalf of a pod. The claim is bound to a PersistentVolume that provides the actual storage. Pods mount the claim as a volume so data survives pod restarts."
    },
    {
      q: "What is an Ingress in Kubernetes?",
      a: "An Ingress exposes HTTP and HTTPS routes from outside the cluster to services inside. Ingress rules map host names and paths to backend services. An Ingress controller implements the rules and acts as a reverse proxy and load balancer."
    },
    {
      q: "What is the difference between a Job and a CronJob?",
      a: "A Job runs one or more pods until a specified number complete successfully. A CronJob schedules Jobs to run at defined times. Jobs handle batch work like data processing while CronJobs handle scheduled tasks like backups."
    },
    {
      q: "How does a rolling update work in Kubernetes?",
      a: "A rolling update replaces old pod versions with new ones gradually. The deployment controller creates new replicas and deletes old ones to avoid downtime. Update progress and rollback are managed by revision history on the deployment."
    },
    {
      q: "What does the Kubernetes control plane do?",
      a: "The control plane manages the overall state of the cluster. The API server exposes the cluster API while the scheduler places pods on nodes. The controller manager and etcd maintain desired state and cluster configuration."
    },
    {
      q: "What is a Helm chart?",
      a: "Helm is a package manager for Kubernetes applications. A chart packages templates, values and metadata into a deployable unit. Helm templates insert values at install time so one chart deploys many different configurations."
    }
  ],
  "Git": [
    {
      q: "What is the difference between Git and GitHub?",
      a: "Git is a distributed version control system that tracks changes in source code locally. GitHub is a cloud platform that hosts Git repositories and adds collaboration features. Git manages the version history while GitHub provides remote backup and team workflows."
    },
    {
      q: "What is the difference between merge and rebase?",
      a: "A merge combines branches and preserves the full history with a merge commit. A rebase rewrites history by replaying commits onto another base branch producing a linear history. Rebase keeps history clean but rewriting shared history can be dangerous."
    },
    {
      q: "What is a Git conflict?",
      a: "A conflict occurs when Git cannot automatically merge changes because two branches edited the same lines. Git marks the conflicting sections in the affected files. The developer must manually resolve each conflict and then complete the merge."
    },
    {
      q: "How do you undo changes in Git?",
      a: "Git checkout restores a file to a previous state while git revert creates a new commit that undoes an earlier one. Git reset moves the branch pointer back and can discard commits. Staged files can be unstaged with git restore."
    },
    {
      q: "What is git stash used for?",
      a: "Git stash temporarily saves uncommitted changes so the working directory is clean. This is useful when switching branches without losing in progress work. The stashed changes can be reapplied later with git stash pop."
    },
    {
      q: "What is the difference between git pull and git fetch?",
      a: "Git fetch downloads commits and branches from a remote but does not change the working directory. Git pull runs a fetch followed by a merge or rebase. Pull integrates the remote changes while fetch only updates the remote tracking branches."
    },
    {
      q: "What is a detached HEAD state in Git?",
      a: "A detached HEAD means the repository is checked out at a commit instead of a branch. New commits made here are not attached to any branch and can be lost. The detached state is often used to inspect old commits or test code."
    },
    {
      q: "How do you squash multiple commits into one?",
      a: "Git rebase with the interactive flag allows squashing commits. The squash action combines the current commit into the previous one. The editor is opened to rewrite the combined commit message."
    },
    {
      q: "What is the difference between git reset and git revert?",
      a: "Git reset moves the branch pointer backward and can erase commits from history. Git revert creates a new commit that undoes the changes of an earlier commit. Revert is safe for shared history while reset should only be used locally."
    },
    {
      q: "What is git cherry-pick used for?",
      a: "Git cherry-pick applies the changes of a specific commit to the current branch. It copies a commit without merging the entire source branch. This is useful for moving a hotfix from one branch to another."
    },
    {
      q: "What is a remote in Git?",
      a: "A remote is a named reference to another copy of the repository. The default remote is usually called origin and points to the central repository. Remotes are managed with git remote add and git remote remove."
    },
    {
      q: "What is a Git tag?",
      a: "A tag marks a specific commit with a meaningful name like a version number. Annotated tags store the author, message and date while lightweight tags are simple pointers. Tags are commonly used to mark release points."
    },
    {
      q: "What is the difference between a local and remote branch?",
      a: "A local branch exists only in the local repository and is used for development. A remote branch tracks the state of a branch on a remote repository. Local branches are published and updated with push and pull commands."
    },
    {
      q: "How do you revert a pushed commit?",
      a: "The git revert command creates a new commit that undoes the pushed commit. This preserves history and is safe for shared branches. The reverted commit is then pushed to update the remote repository."
    }
  ],
  "CI/CD": [
    {
      q: "What is continuous integration?",
      a: "Continuous integration is the practice of merging code changes into a shared repository frequently. Each merge triggers an automated build and test pipeline. This catches integration errors early and keeps the main branch in a deployable state."
    },
    {
      q: "What is the difference between continuous delivery and continuous deployment?",
      a: "Continuous delivery automates building, testing and packaging so software is always ready for release. Continuous deployment goes further and automatically deploys every change that passes the pipeline. Delivery stops before production while deployment fully automates it."
    },
    {
      q: "What is a pipeline in DevOps?",
      a: "A pipeline is an automated sequence of stages that takes code from commit to production. Typical stages include build, test, security scan and deploy. A pipeline runs in parallel and stops if any stage fails."
    },
    {
      q: "What is a build artifact?",
      a: "A build artifact is a file produced by the build stage of a pipeline. Artifacts include compiled binaries, container images and packages. They are stored in a registry and passed to later stages for testing and deployment."
    },
    {
      q: "What is a blue-green deployment?",
      a: "A blue-green deployment runs two identical environments side by side. New traffic is switched to the green environment after it passes validation. This enables instant rollback by switching traffic back to the blue environment."
    },
    {
      q: "What is a canary deployment?",
      a: "A canary deployment releases a new version to a small subset of users first. Traffic is gradually increased while monitoring for errors. If metrics look healthy the new version replaces the old one completely."
    },
    {
      q: "What is a rollback in deployment?",
      a: "A rollback reverts an application to a previous known good version. This is triggered when a new deployment fails health checks or causes errors. Rollbacks are fast when images and configurations are versioned."
    },
    {
      q: "What is the difference between a build and a release?",
      a: "A build is the process of compiling source code into an executable artifact. A release is a build that has been tagged and made available to deploy. Continuous delivery automates builds while releases manage versioned deployments."
    },
    {
      q: "What is an environment in CI/CD?",
      a: "An environment is a deployed context like development, staging or production. Each environment has its own configuration, credentials and approval rules. Pipelines promote artifacts through environments in a controlled order."
    },
    {
      q: "Why is automated testing important in CI?",
      a: "Automated testing gives fast feedback on every code change. It catches regressions early before code reaches production. Reliable tests build confidence in every merge and allow frequent releases."
    }
  ],
  "Shell Scripting": [
    {
      q: "What is a shell in Linux?",
      a: "A shell is a command line interpreter that executes user commands. Bash is the most common default shell and supports scripting with variables and control flow. Shells also provide job control and redirection of input and output."
    },
    {
      q: "What is cron and how does it work?",
      a: "Cron is a scheduler that runs commands at specified times. A crontab file defines schedules using five fields for minute, hour, day, month and weekday. The cron daemon reads the crontab and executes matching jobs automatically."
    },
    {
      q: "What are environment variables in Linux?",
      a: "Environment variables are named values that affect program behavior. They are inherited by child processes and configure things like the path and language. Environment variables are set with export and listed with the env command."
    },
    {
      q: "What is a shebang line in a shell script?",
      a: "The shebang is the first line of a script and starts with a hash and exclamation mark. It tells the kernel which interpreter to use for the script. For example shebang slash bin bash runs the script with the bash shell."
    },
    {
      q: "What are exit codes in shell scripting?",
      a: "Every command returns a numeric exit code to indicate success or failure. A zero exit code means success while a nonzero code means an error. Scripts check the special variable question mark to read the last exit code."
    },
    {
      q: "How do you make a script executable?",
      a: "The chmod command with the plus x flag adds execute permission to the file. After that the script can be run directly with a path prefix. The shebang determines the interpreter used when the file is executed."
    },
    {
      q: "What is the difference between single and double quotes in bash?",
      a: "Single quotes preserve every character literally and prevent variable expansion. Double quotes allow variable expansion and command substitution inside them. Use single quotes for literal text and double quotes for strings with variables."
    },
    {
      q: "What are standard input, output and error in Linux?",
      a: "Standard input is where a command reads data and standard output is where it writes results. Standard error is a separate stream for error messages. All three are redirected with the greater than and less than operators."
    },
    {
      q: "What is a pipeline in shell scripting?",
      a: "A pipeline connects the output of one command to the input of another. Commands are joined with the pipe character. Pipelines allow complex processing without intermediate files."
    },
    {
      q: "How do you debug a bash script?",
      a: "Running the script with the minus x flag prints each command before executing it. The minus v flag prints input lines as they are read. These flags help trace variable values and control flow during execution."
    }
  ],
  "Networking": [
    {
      q: "What is the difference between TCP and UDP?",
      a: "TCP is a connection oriented protocol that guarantees delivery with acknowledgments and retransmission. UDP is connectionless and sends datagrams without guarantees of delivery or ordering. TCP suits reliable data like web traffic while UDP suits low latency streaming."
    },
    {
      q: "What is the difference between a port and an IP address?",
      a: "An IP address identifies a host on a network while a port identifies a specific service on that host. Together they form a socket used to establish connections. Port numbers below one thousand twenty four are reserved for well known services."
    },
    {
      q: "How does DNS resolve a domain name?",
      a: "DNS translates a human readable domain name into an IP address. The resolver queries the DNS hierarchy of root, top level and authoritative servers. The response is cached to speed up future lookups."
    },
    {
      q: "What is the OSI model?",
      a: "The OSI model describes networking in seven layers from physical to application. Each layer provides services to the layer above it. The model helps troubleshoot by isolating problems to a specific layer."
    },
    {
      q: "What is a subnet mask?",
      a: "A subnet mask separates the network part of an IP address from the host part. It determines which devices are on the same local network. Subnetting improves routing efficiency and security by dividing large networks."
    },
    {
      q: "What is the difference between HTTP and HTTPS?",
      a: "HTTP transfers web data in plain text that can be read in transit. HTTPS encrypts the connection using TLS certificates. HTTPS protects login credentials and prevents tampering with web traffic."
    },
    {
      q: "What is a firewall?",
      a: "A firewall filters network traffic based on a set of security rules. It blocks unauthorized access and allows only permitted ports and addresses. Firewalls protect hosts and networks from malicious traffic."
    },
    {
      q: "What is the difference between a router and a switch?",
      a: "A switch connects devices within the same local network and forwards frames by MAC address. A router connects different networks and forwards packets by IP address. Routers handle traffic between networks while switches handle traffic within one."
    },
    {
      q: "What is Network Address Translation?",
      a: "NAT translates private IP addresses into a public address for internet access. It lets many devices share one public IP address. NAT also provides a basic layer of security by hiding internal addresses."
    },
    {
      q: "What is the difference between latency and bandwidth?",
      a: "Latency is the time taken for data to travel from source to destination. Bandwidth is the maximum amount of data that can be transferred per second. Low latency makes connections feel responsive while high bandwidth allows large transfers."
    }
  ]
};