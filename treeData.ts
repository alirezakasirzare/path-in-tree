import { Tree } from './types';

const trivialTree: Tree = {
  id: 0,
  items: [],
};

const simpleTree: Tree = {
  id: 42,
  items: [
    {
      id: 98,
      items: [],
    },
    {
      id: 1,
      items: [],
    },
  ],
};

const deepTree: Tree = {
  id: 666,
  items: [
    {
      id: 2,
      items: [
        {
          id: 7,
          items: [
            {
              id: 25,
              items: [],
            },
            {
              id: 79,
              items: [
                {
                  id: 23,
                  items: [],
                },
                {
                  id: 44,
                  items: [
                    {
                      id: 152,
                      items: [],
                    },
                    {
                      id: 368,
                      items: [
                        {
                          id: 786,
                          items: [
                            {
                              id: 999,
                              items: [
                                {
                                  id: 1205,
                                  items: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 85,
      items: [
        {
          id: 98,
          items: [
            {
              id: 66,
              items: [
                {
                  id: 49,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const wideTree: Tree = {
  id: 9999,
  items: [
    {
      id: 0,
      items: [
        {
          id: 1,
          items: [
            {
              id: 2,
              items: [
                {
                  id: 3,
                  items: [],
                },
                {
                  id: 4,
                  items: [],
                },
                {
                  id: 5,
                  items: [],
                },
              ],
            },
            {
              id: 6,
              items: [
                {
                  id: 7,
                  items: [],
                },
                {
                  id: 8,
                  items: [],
                },
                {
                  id: 9,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 10,
          items: [
            {
              id: 11,
              items: [
                {
                  id: 12,
                  items: [],
                },
                {
                  id: 13,
                  items: [],
                },
                {
                  id: 14,
                  items: [],
                },
              ],
            },
            {
              id: 15,
              items: [
                {
                  id: 16,
                  items: [],
                },
                {
                  id: 17,
                  items: [],
                },
                {
                  id: 18,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 19,
          items: [
            {
              id: 20,
              items: [
                {
                  id: 21,
                  items: [],
                },
                {
                  id: 22,
                  items: [],
                },
                {
                  id: 23,
                  items: [],
                },
              ],
            },
            {
              id: 24,
              items: [
                {
                  id: 25,
                  items: [],
                },
                {
                  id: 26,
                  items: [],
                },
                {
                  id: 27,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 28,
          items: [
            {
              id: 29,
              items: [
                {
                  id: 30,
                  items: [],
                },
                {
                  id: 31,
                  items: [],
                },
                {
                  id: 32,
                  items: [],
                },
              ],
            },
            {
              id: 33,
              items: [
                {
                  id: 34,
                  items: [],
                },
                {
                  id: 35,
                  items: [],
                },
                {
                  id: 36,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 37,
          items: [
            {
              id: 38,
              items: [
                {
                  id: 39,
                  items: [],
                },
                {
                  id: 40,
                  items: [],
                },
                {
                  id: 41,
                  items: [],
                },
              ],
            },
            {
              id: 42,
              items: [
                {
                  id: 43,
                  items: [],
                },
                {
                  id: 44,
                  items: [],
                },
                {
                  id: 45,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 46,
          items: [
            {
              id: 47,
              items: [
                {
                  id: 48,
                  items: [],
                },
                {
                  id: 49,
                  items: [],
                },
                {
                  id: 50,
                  items: [],
                },
              ],
            },
            {
              id: 51,
              items: [
                {
                  id: 52,
                  items: [],
                },
                {
                  id: 53,
                  items: [],
                },
                {
                  id: 54,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 55,
      items: [
        {
          id: 56,
          items: [
            {
              id: 57,
              items: [
                {
                  id: 58,
                  items: [],
                },
                {
                  id: 59,
                  items: [],
                },
                {
                  id: 60,
                  items: [],
                },
              ],
            },
            {
              id: 61,
              items: [
                {
                  id: 62,
                  items: [],
                },
                {
                  id: 63,
                  items: [],
                },
                {
                  id: 64,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 65,
          items: [
            {
              id: 66,
              items: [
                {
                  id: 67,
                  items: [],
                },
                {
                  id: 68,
                  items: [],
                },
                {
                  id: 69,
                  items: [],
                },
              ],
            },
            {
              id: 70,
              items: [
                {
                  id: 71,
                  items: [],
                },
                {
                  id: 72,
                  items: [],
                },
                {
                  id: 73,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 74,
          items: [
            {
              id: 75,
              items: [
                {
                  id: 76,
                  items: [],
                },
                {
                  id: 77,
                  items: [],
                },
                {
                  id: 78,
                  items: [],
                },
              ],
            },
            {
              id: 79,
              items: [
                {
                  id: 80,
                  items: [],
                },
                {
                  id: 81,
                  items: [],
                },
                {
                  id: 82,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 83,
          items: [
            {
              id: 84,
              items: [
                {
                  id: 85,
                  items: [],
                },
                {
                  id: 86,
                  items: [],
                },
                {
                  id: 87,
                  items: [],
                },
              ],
            },
            {
              id: 88,
              items: [
                {
                  id: 89,
                  items: [],
                },
                {
                  id: 90,
                  items: [],
                },
                {
                  id: 91,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 92,
          items: [
            {
              id: 93,
              items: [
                {
                  id: 94,
                  items: [],
                },
                {
                  id: 95,
                  items: [],
                },
                {
                  id: 96,
                  items: [],
                },
              ],
            },
            {
              id: 97,
              items: [
                {
                  id: 98,
                  items: [],
                },
                {
                  id: 99,
                  items: [],
                },
                {
                  id: 100,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 101,
          items: [
            {
              id: 102,
              items: [
                {
                  id: 103,
                  items: [],
                },
                {
                  id: 104,
                  items: [],
                },
                {
                  id: 105,
                  items: [],
                },
              ],
            },
            {
              id: 106,
              items: [
                {
                  id: 107,
                  items: [],
                },
                {
                  id: 108,
                  items: [],
                },
                {
                  id: 109,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 110,
      items: [
        {
          id: 111,
          items: [
            {
              id: 112,
              items: [
                {
                  id: 113,
                  items: [],
                },
                {
                  id: 114,
                  items: [],
                },
                {
                  id: 115,
                  items: [],
                },
              ],
            },
            {
              id: 116,
              items: [
                {
                  id: 117,
                  items: [],
                },
                {
                  id: 118,
                  items: [],
                },
                {
                  id: 119,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 120,
          items: [
            {
              id: 121,
              items: [
                {
                  id: 122,
                  items: [],
                },
                {
                  id: 123,
                  items: [],
                },
                {
                  id: 124,
                  items: [],
                },
              ],
            },
            {
              id: 125,
              items: [
                {
                  id: 126,
                  items: [],
                },
                {
                  id: 127,
                  items: [],
                },
                {
                  id: 128,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 129,
          items: [
            {
              id: 130,
              items: [
                {
                  id: 131,
                  items: [],
                },
                {
                  id: 132,
                  items: [],
                },
                {
                  id: 133,
                  items: [],
                },
              ],
            },
            {
              id: 134,
              items: [
                {
                  id: 135,
                  items: [],
                },
                {
                  id: 136,
                  items: [],
                },
                {
                  id: 137,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 138,
          items: [
            {
              id: 139,
              items: [
                {
                  id: 140,
                  items: [],
                },
                {
                  id: 141,
                  items: [],
                },
                {
                  id: 142,
                  items: [],
                },
              ],
            },
            {
              id: 143,
              items: [
                {
                  id: 144,
                  items: [],
                },
                {
                  id: 145,
                  items: [],
                },
                {
                  id: 146,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 147,
          items: [
            {
              id: 148,
              items: [
                {
                  id: 149,
                  items: [],
                },
                {
                  id: 150,
                  items: [],
                },
                {
                  id: 151,
                  items: [],
                },
              ],
            },
            {
              id: 152,
              items: [
                {
                  id: 153,
                  items: [],
                },
                {
                  id: 154,
                  items: [],
                },
                {
                  id: 155,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 156,
          items: [
            {
              id: 157,
              items: [
                {
                  id: 158,
                  items: [],
                },
                {
                  id: 159,
                  items: [],
                },
                {
                  id: 160,
                  items: [],
                },
              ],
            },
            {
              id: 161,
              items: [
                {
                  id: 162,
                  items: [],
                },
                {
                  id: 163,
                  items: [],
                },
                {
                  id: 164,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 165,
      items: [
        {
          id: 166,
          items: [
            {
              id: 167,
              items: [
                {
                  id: 168,
                  items: [],
                },
                {
                  id: 169,
                  items: [],
                },
                {
                  id: 170,
                  items: [],
                },
              ],
            },
            {
              id: 171,
              items: [
                {
                  id: 172,
                  items: [],
                },
                {
                  id: 173,
                  items: [],
                },
                {
                  id: 174,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 175,
          items: [
            {
              id: 176,
              items: [
                {
                  id: 177,
                  items: [],
                },
                {
                  id: 178,
                  items: [],
                },
                {
                  id: 179,
                  items: [],
                },
              ],
            },
            {
              id: 180,
              items: [
                {
                  id: 181,
                  items: [],
                },
                {
                  id: 182,
                  items: [],
                },
                {
                  id: 183,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 184,
          items: [
            {
              id: 185,
              items: [
                {
                  id: 186,
                  items: [],
                },
                {
                  id: 187,
                  items: [],
                },
                {
                  id: 188,
                  items: [],
                },
              ],
            },
            {
              id: 189,
              items: [
                {
                  id: 190,
                  items: [],
                },
                {
                  id: 191,
                  items: [],
                },
                {
                  id: 192,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 193,
          items: [
            {
              id: 194,
              items: [
                {
                  id: 195,
                  items: [],
                },
                {
                  id: 196,
                  items: [],
                },
                {
                  id: 197,
                  items: [],
                },
              ],
            },
            {
              id: 198,
              items: [
                {
                  id: 199,
                  items: [],
                },
                {
                  id: 200,
                  items: [],
                },
                {
                  id: 201,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 202,
          items: [
            {
              id: 203,
              items: [
                {
                  id: 204,
                  items: [],
                },
                {
                  id: 205,
                  items: [],
                },
                {
                  id: 206,
                  items: [],
                },
              ],
            },
            {
              id: 207,
              items: [
                {
                  id: 208,
                  items: [],
                },
                {
                  id: 209,
                  items: [],
                },
                {
                  id: 210,
                  items: [],
                },
              ],
            },
          ],
        },
        {
          id: 211,
          items: [
            {
              id: 212,
              items: [
                {
                  id: 213,
                  items: [],
                },
                {
                  id: 214,
                  items: [],
                },
                {
                  id: 215,
                  items: [],
                },
              ],
            },
            {
              id: 216,
              items: [
                {
                  id: 217,
                  items: [],
                },
                {
                  id: 218,
                  items: [],
                },
                {
                  id: 219,
                  items: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { trivialTree, simpleTree, deepTree, wideTree };
