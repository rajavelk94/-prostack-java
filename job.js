class Test
{
 public static void main(String[] args)
 {
  String str="aaaccddbbbeeefff";
 Map<Character,Integer> map=new TreeMap<>();
 for(int i=str.length()-1;i>=0;i--)
 {
   if(map.containsKey(str.charAt(i)))
    {
   int count=map.get(str.charAt(i));
   map.put(str.charAt(i),++count);
}
else
{
 map.put(str.charAt(i),1);
}
}
System.out.println(map);
}
}
