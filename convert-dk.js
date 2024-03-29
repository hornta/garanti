const { writeFileSync } = require('fs');

const data = `
1:	X	1	1	1	1	X	X	2	2
2:	X	1	1	2	2	1	1	2	2
3:	X	1	1	2	2	X	X	1	1
4:	X	1	2	1	2	1	X	2	1
5:	X	1	2	1	2	X	1	1	2
6:	X	1	2	2	1	1	X	1	2
7:	X	1	2	2	1	X	1	2	1
8:	X	X	1	1	2	1	X	1	2
9:	X	X	1	1	2	X	1	2	1
10:	X	X	1	2	1	1	X	2	1
11:	X	X	1	2	1	X	1	1	2
12:	X	X	2	1	1	1	1	2	2
13:	X	X	2	1	1	X	X	1	1
14:	X	X	2	2	2	1	1	1	1
15:	1	2	1	1	2	X	X	2	1
16:	1	2	1	2	1	1	X	2	2
17:	1	2	1	2	2	X	1	1	2
18:	1	2	2	1	1	X	1	2	2
19:	1	2	2	1	2	1	X	1	2
20:	1	2	2	2	1	X	X	1	1
21:	1	2	2	2	2	1	1	2	1
22:	1	1	X	1	2	X	1	2	2
23:	1	1	X	2	1	X	X	1	2
24:	1	1	X	2	2	1	X	2	1
25:	1	1	1	X	2	X	X	1	2
26:	1	1	1	1	2	2	X	2	2
27:	1	1	1	2	X	X	X	2	1
28:	1	1	1	2	1	X	2	2	2
29:	1	1	1	2	2	1	X	X	2
30:	1	1	1	2	2	X	1	2	X
31:	1	1	2	X	1	1	X	2	2
32:	1	1	2	X	2	X	1	2	1
33:	1	1	2	1	X	X	X	1	2
34:	1	1	2	1	1	X	X	2	X
35:	1	1	2	1	2	1	2	2	2
36:	1	1	2	1	2	X	X	X	1
37:	1	1	2	2	X	1	1	2	2
38:	1	1	2	2	1	2	X	2	1
39:	1	1	2	2	1	X	1	X	2
40:	1	1	2	2	2	2	1	1	2
41:	1	1	2	2	2	1	X	1	X
42:	1	1	2	2	2	X	2	1	1
43:	1	X	X	1	1	1	X	2	2
44:	1	X	X	1	2	X	X	1	1
45:	1	X	X	2	1	X	1	2	1
46:	1	X	X	2	2	1	1	1	2
47:	1	X	1	X	1	X	X	2	1
48:	1	X	1	X	2	1	1	2	2
49:	1	X	1	1	X	X	1	2	2
50:	1	X	1	1	1	X	X	X	2
51:	1	X	1	1	2	1	X	2	X
52:	1	X	1	1	2	X	2	1	2
53:	1	X	1	2	X	1	X	1	2
54:	1	X	1	2	1	2	1	2	2
55:	1	X	1	2	1	X	X	1	X
56:	1	X	1	2	2	2	X	1	1
57:	1	X	1	2	2	1	2	2	1
58:	1	X	1	2	2	X	1	X	1
59:	1	X	2	X	1	X	1	1	2
60:	1	X	2	X	2	1	X	1	1
61:	1	X	2	1	X	1	X	2	1
62:	1	X	2	1	1	2	X	1	2
63:	1	X	2	1	1	X	2	2	1
64:	1	X	2	1	2	2	1	2	1
65:	1	X	2	1	2	1	1	X	2
66:	1	X	2	1	2	X	1	1	X
67:	1	X	2	2	X	X	1	1	1
68:	1	X	2	2	1	1	X	X	1
69:	1	X	2	2	1	1	2	1	2
70:	1	X	2	2	1	1	1	2	X
71:	2	2	1	1	1	X	X	1	2
72:	2	2	1	1	2	1	1	2	2
73:	2	2	1	2	1	X	1	2	1
74:	2	2	1	2	2	1	X	1	1
75:	2	2	2	1	1	1	X	2	1
76:	2	2	2	1	2	X	1	1	1
77:	2	2	2	2	1	1	1	1	2
78:	2	1	X	1	1	X	X	2	1
79:	2	1	X	1	2	1	X	1	2
80:	2	1	X	2	1	1	1	2	2
81:	2	1	X	2	2	X	1	1	1
82:	2	1	1	X	1	X	1	2	2
83:	2	1	1	X	2	1	X	2	1
84:	2	1	1	1	X	1	X	2	2
85:	2	1	1	1	2	X	X	1	X
86:	2	1	1	1	2	X	1	X	2
87:	2	1	1	1	2	X	2	2	1
88:	2	1	1	2	X	X	1	1	2
89:	2	1	1	2	1	2	X	1	2
90:	2	1	1	2	1	1	X	2	X
91:	2	1	1	2	1	X	X	X	1
92:	2	1	1	2	2	2	1	2	1
93:	2	1	1	2	2	1	2	1	2
94:	2	1	2	X	1	X	X	1	1
95:	2	1	2	X	2	1	1	1	2
96:	2	1	2	1	X	X	1	2	1
97:	2	1	2	1	1	2	1	2	2
98:	2	1	2	1	1	1	X	X	2
99:	2	1	2	1	1	X	2	1	2
100:	2	1	2	1	2	2	X	1	1
101:	2	1	2	1	2	1	1	2	X
102:	2	1	2	2	X	1	X	1	1
103:	2	1	2	2	1	1	2	2	1
104:	2	1	2	2	1	X	1	1	X
105:	2	1	2	2	2	1	1	X	1
106:	2	X	X	1	1	X	1	1	2
107:	2	X	X	1	2	1	1	2	1
108:	2	X	X	2	1	1	X	1	1
109:	2	X	1	X	1	1	X	1	2
110:	2	X	1	X	2	X	1	1	1
111:	2	X	1	1	X	X	X	1	1
112:	2	X	1	1	1	2	X	2	1
113:	2	X	1	1	1	1	2	2	2
114:	2	X	1	1	1	X	1	2	X
115:	2	X	1	1	2	2	1	1	2
116:	2	X	1	1	2	1	X	X	1
117:	2	X	1	2	X	1	1	2	1
118:	2	X	1	2	1	1	1	X	2
119:	2	X	1	2	1	X	2	1	1
120:	2	X	1	2	2	1	1	1	X
121:	2	X	2	X	1	1	1	2	1
122:	2	X	2	1	X	1	1	1	2
123:	2	X	2	1	1	1	X	1	X
124:	2	X	2	1	1	X	1	X	1
125:	2	X	2	1	2	1	2	1	1
126:	2	X	2	2	1	2	1	1	1
127:	2	2	X	X	X	1	1	1	1
128:	2	2	X	1	1	2	2	1	1
129:	2	2	X	1	1	1	1	X	X
130:	2	2	1	X	1	2	1	1	X
131:	2	2	1	X	1	1	2	X	1
132:	2	2	1	1	X	2	1	X	1
133:	2	2	1	1	X	1	2	1	X
134:	2	1	X	X	1	2	1	X	1
135:	2	1	X	X	1	1	2	1	X
136:	2	1	X	1	X	2	1	1	X
137:	2	1	X	1	X	1	2	X	1
138:	2	1	1	X	X	2	2	1	1
139:	2	1	1	X	X	1	1	X	X
140:	2	1	1	1	1	2	2	X	X
141:	X	X	X	X	1	1	1	1	X
142:	X	X	X	1	X	2	1	1	1
143:	X	X	X	1	1	1	2	X	1
144:	X	X	1	X	X	1	2	1	1
145:	X	X	1	X	1	2	1	X	1
146:	X	X	1	1	X	1	1	X	X
147:	X	X	1	1	1	2	2	1	X
148:	X	2	2	X	1	1	2	1	1
149:	X	2	2	1	X	1	1	X	1
150:	X	2	2	1	1	2	1	1	X
151:	X	2	X	2	1	1	1	X	1
152:	X	2	X	X	1	X	1	1	1
153:	X	2	X	1	2	1	1	1	X
154:	X	2	X	1	X	1	X	1	1
155:	X	2	X	1	1	2	1	2	1
156:	X	2	X	1	1	1	2	1	2
157:	X	2	1	2	X	2	1	1	1
158:	X	2	1	2	1	1	2	1	X
159:	X	2	1	X	2	1	1	X	1
160:	X	2	1	X	X	1	1	1	2
161:	X	2	1	X	1	2	X	1	1
162:	X	2	1	X	1	1	1	2	X
163:	X	2	1	1	2	2	2	1	1
164:	X	2	1	1	X	X	1	1	X
165:	X	2	1	1	X	1	2	2	1
166:	X	2	1	1	1	X	2	X	1
167:	X	2	1	1	1	2	1	X	2
168:	X	2	1	1	1	1	X	X	X
169:	X	1	2	X	X	2	1	1	1
170:	X	1	2	X	1	1	1	X	X
171:	X	1	2	1	X	1	2	1	X
172:	X	1	2	1	1	2	2	X	1
173:	X	1	X	2	X	1	1	1	X
174:	X	1	X	2	1	2	2	1	1
175:	X	1	X	X	2	1	2	1	1
176:	X	1	X	X	X	1	1	2	1
177:	X	1	X	X	1	2	1	1	2
178:	X	1	X	X	1	1	X	X	1
179:	X	1	X	1	2	2	1	X	1
180:	X	1	X	1	X	X	2	1	1
181:	X	1	X	1	X	1	1	X	2
182:	X	1	X	1	1	X	1	X	X
183:	X	1	X	1	1	2	X	1	X
184:	X	1	X	1	1	1	2	2	X
185:	X	1	1	2	X	1	2	X	1
186:	X	1	1	2	1	2	1	X	X
187:	X	1	1	X	2	2	1	1	X
188:	X	1	1	X	X	X	1	X	1
189:	X	1	1	X	X	1	X	1	X
190:	X	1	1	X	1	X	2	1	X
191:	X	1	1	X	1	2	2	2	1
192:	X	1	1	X	1	1	2	X	2
193:	X	1	1	1	2	1	2	X	X
194:	X	1	1	1	X	2	1	2	X
195:	X	1	1	1	X	2	X	X	1
196:	X	1	1	1	X	2	2	1	2
197:	1	X	X	X	X	1	1	X	1
198:	1	X	X	X	1	2	2	1	1
199:	1	X	X	1	X	1	2	1	X
200:	1	X	X	1	1	2	1	X	X
201:	1	X	1	X	X	2	1	1	X
202:	1	X	1	X	1	1	2	X	X
203:	1	X	1	1	X	2	2	X	1
204:	1	2	2	X	X	1	1	1	X
205:	1	2	2	X	1	2	1	X	1
206:	1	2	2	1	X	2	2	1	1
207:	1	2	2	1	1	1	2	X	X
208:	1	2	X	2	X	1	2	1	1
209:	1	2	X	2	1	2	1	1	X
210:	1	2	X	X	2	2	1	1	1
211:	1	2	X	X	1	1	1	X	2
212:	1	2	X	X	1	1	2	2	1
213:	1	2	X	X	1	1	X	1	X
214:	1	2	X	1	2	1	2	X	1
215:	1	2	X	1	X	X	1	X	1
216:	1	2	X	1	X	2	1	1	2
217:	1	2	X	1	X	1	1	2	X
218:	1	2	X	1	1	X	2	1	X
219:	1	2	X	1	1	2	X	X	1
220:	1	2	1	2	X	1	1	X	X
221:	1	2	1	2	1	2	2	X	1
222:	1	2	1	X	2	1	2	1	X
223:	1	2	1	X	X	X	2	1	1
224:	1	2	1	X	X	2	1	2	1
225:	1	2	1	X	X	1	X	X	1
226:	1	2	1	X	1	X	1	X	X
227:	1	2	1	X	1	2	2	1	2
228:	1	2	1	1	2	2	1	X	X
229:	1	2	1	1	X	2	X	1	X
230:	1	2	1	1	X	1	2	X	2
231:	1	2	1	1	1	2	2	2	X
232:	1	1	2	X	X	1	2	X	1
233:	1	1	2	X	1	2	2	1	X
234:	1	1	2	1	X	2	1	X	X
235:	1	1	X	2	X	2	1	X	1
236:	1	1	X	2	1	1	2	X	X
237:	1	1	X	X	2	1	1	X	X
238:	1	1	X	X	X	X	1	1	X
239:	1	1	X	X	X	2	X	1	1
240:	1	1	X	X	X	1	2	1	2
241:	1	1	X	X	1	X	2	X	1
242:	1	1	X	X	1	2	1	2	X
243:	1	1	X	1	2	2	2	1	X
244:	1	1	X	1	X	2	2	2	1
245:	1	1	X	1	X	1	X	X	X
246:	1	1	X	1	1	2	2	X	2
247:	1	1	1	2	X	2	2	1	X
248:	1	1	1	X	2	2	2	X	1
249:	1	1	1	X	X	2	1	X	2
250:	1	1	1	X	X	1	2	2	X
251:	1	1	1	X	1	2	X	X	X
252:	1	1	1	1	X	X	2	X	X
253:	1	1	1	1	1	1	1	1	1










`;

const fixedData = data.trim();
const form = fixedData
	.trim()
	.replace(/[0-9]+:/gm, '')
	.replace(/\t+/gm, '')
	.replace(/(^)/gm, '[')
	.replace(/($)/gm, '],')
	.replace(/1/gm, '0')
	.replace(/X/gm, '1')
	.replace(/2/gm, '2')
	.replace(/([0-9])/gm, '$1,');
writeFileSync('results', form, { encoding: 'utf-8' });
