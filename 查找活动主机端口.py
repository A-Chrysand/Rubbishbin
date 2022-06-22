import os, re


class a:

    def __init__(self):
        self.mark = []
        self.ip3 = 250
        self.ip4_start = 1
        self.ip4_end = 255
        self.port = 80

    def main(self):
        for i in range(0, self.ip4_end):
            string_ip = '172.30.' + str(self.ip3) + '.' + str(i) + ' ' + str(
                self.port)
            self.execCmd(cmd="tcping -n 1 -w 0.2 " + string_ip)
            if i == self.ip4_end:
                break
        if self.mark:
            print(self.mark)
        else:
            print("没有发现活动的主机端口")
        a = input("需要搜索下一个子网吗？[1/0]\n>")
        if a == '1' or a == 1:
            self.ip3 += 1
            self.main()
        else:
            return

    def execCmd(self, cmd):
        r = os.popen(cmd)
        text = r.read()
        r.close()
        pt = text.split('\n')[1]
        print(pt)
        if pt.find("Port is open") != -1:
            self.mark.append(re.findall(r'\d*.\d*.\d*.\d*:80', pt))


b = a()
b.main()
